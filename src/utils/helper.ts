import { SetStateAction } from "react";
import { allWeatherData, cityCordinatesInfo, fetchCityName } from "./Api";
import { ICityDataMapped, ICityListData, IWeatherDataMapped, Icordinates, IdailyWeatherData } from "./type/types";
import { ISelectedCriteria, WeatherCity } from "./type";
import { weekly } from "./constants";
import { updateCityListData, updateDailyWeatherData, updateSearchText } from "../redux/reducers";

//fetch city name on the basis of latitude and longitude.
export const getCityName = async (
  latitude: number,
  longitude: number,
  cityName: ICityDataMapped,
  setCityName: React.Dispatch<SetStateAction<ICityDataMapped>>
) => {
  try {
    const data = await fetchCityName({ latitude, longitude });
    const mappedData = mapAPIData(data, WeatherCity.City)
    setCityName({ ...cityName, ...mappedData });
  } catch (error) {
    console.log("getCityName: something went wrong ", error);
  }
};

//fetch temperature on the basis of latitude and longitude.
export const fetchWeatherData = async (
  cordinates: Icordinates,
  setCurrentWeather: React.Dispatch<SetStateAction<IWeatherDataMapped>>,
  currentWeather: IWeatherDataMapped,
  dispatch?: any,
  isCustomDataEnabled: boolean = false,
  refetch: boolean = false,
) => {
  try {
    const data = await allWeatherData(cordinates, 16);
    const mappedAPIData = mapAPIData(data, WeatherCity.Weather)
    //@ts-ignore
    // if (currentWeather?.currentTemperature !== mappedAPIData?.currentTemperature) {
      setCurrentWeather({ ...currentWeather, ...mappedAPIData });
    // }
    //only update this when custom is true for second card (and for first if it is false)
    if (isCustomDataEnabled && !refetch) {
      const reformatedData: IdailyWeatherData[] = reformatTimeWiseWeather(data);
      !refetch && dispatch(updateDailyWeatherData([...reformatedData]));
    }
  } catch (error) {
    console.log("fetchWeatherData: something went wrong ", error);
  }
};

//format weather data
export const mapAPIData = (data: any, type: string): IWeatherDataMapped | ICityDataMapped => {
  let reformatedData: IWeatherDataMapped | ICityDataMapped;
  if (type === WeatherCity.Weather) {
    const { current_weather, hourly, latitude, longitude, hourly_units } = data;
    reformatedData = {
      currentTemperature: current_weather?.temperature,
      temperatureExtended: hourly?.temperature_2m,
      timeExtended: hourly?.time,
      unit: hourly_units?.temperature_2m,
      latitude,
      longitude,
    }
  } else if (type === WeatherCity.City) {
    const { results } = data;
    reformatedData = {
      country: results?.[0]?.components?.country,
      district: results?.[0]?.components?.state_district,
      suburb: results?.[0]?.components?.suburb,
    }
  }
  //@ts-ignore
  return reformatedData;
}

//fetch city lat & lon and after that fetch weather data
export const fetchWeatherDataForCity = async (
  cityData: string[],
  cityListData: ICityListData[],
  dispatch: any,
  setLoader: React.Dispatch<SetStateAction<boolean>>
) => {
  try {
    const currentCity = cityData[cityData.length - 1];

    //fetch cordinates of the searched city
    const cityCordinatesData = await cityCordinatesInfo(currentCity);
    const latitude = cityCordinatesData?.results?.[0]?.geometry?.lat;
    const longitude = cityCordinatesData?.results?.[0]?.geometry?.lng;
    const Country = cityCordinatesData?.results?.[0]?.components?.country;
    const stateDistrict =
      cityCordinatesData?.results?.[0]?.components?.state_district;

    //fetching weather on basis of city cordinates
    const weatherResponsData = await allWeatherData({ latitude, longitude }, 1);

    //if error in api response
    if (weatherResponsData?.error) {
      setLoader(false);
      // return setCityListData([...cityListData]);
      return dispatch(updateCityListData([...cityListData]));
    }

    const temperature = weatherResponsData?.current_weather?.temperature;
    const prepareCityData = {
      Country,
      stateDistrict,
      temperature,
      longitude,
      latitude,
      currentCity,
    };
    //to fix multiple same city card.
    const removeSameObjects = cityListData?.reduce((last: any, curr: any) => {
      if (curr?.currentCity?.toLowerCase()?.trim() === currentCity?.toLowerCase()?.trim()) {
        return [...last];
      }
      setLoader(false);
      return [...last, curr];
    }, []);

    const reversed = [...removeSameObjects, prepareCityData]?.reverse()
    // setCityListData([...reversed]);
    dispatch(updateCityListData([...reversed]));
    dispatch(updateSearchText(''));
    setLoader(false);
  } catch (error) {
    console.log("fetchWeatherDataForCity: something went wrong ", error);
  }
};

//get users current location cordinates (latitude & longitude)
export const getCurrentLocation = (
  cityName: any,
  setCityName: any,
  cordinates: Icordinates,
  setCordinates: React.Dispatch<SetStateAction<Icordinates>>
) => {
  navigator.geolocation.getCurrentPosition((position) => {
    setCordinates({
      ...cordinates,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    getCityName(
      position.coords.latitude,
      position.coords.longitude,
      cityName,
      setCityName
    );
  });
};

//reformat data in [{time: '', temperature: 0}]
export const reformatTimeWiseWeather = (weather: any) => {
  let counterIndex: number = 0;
  return weather?.hourly?.temperature_2m?.reduce(
    (last: number[], cur: number) => {
      counterIndex++;
      return [
        ...last,
        { time: weather?.hourly?.time[counterIndex], temperature: cur },
      ];
    },
    []
  );
};

//evaluates today data and returns
export const evaluateTodayAndTomorrowData = (
  dailyWeatherData: IdailyWeatherData[],
  sliceStart: number,
  sliceEnd: number
) => {
  return [...dailyWeatherData?.slice(sliceStart, sliceEnd)]?.map(
    (item: any) => {
      return {
        time: item?.time?.split("T")?.[1],
        temperature: item?.temperature,
      };
    }
  );
};
//evaluates daily basis data and returns
export const evaluateDailyBasedData = (dailyWeatherData: any) => {
  let index: number = 0;
  let count: number = 0;
  let date: string[] = [];

  const dailyWeatherDataUpdated = dailyWeatherData
    ?.slice(0, 360)
    ?.reduce((last: any, curr: any) => {
      count += curr?.temperature;
      index++;
      if (index === 23) {
        date.push(
          curr?.time?.split("T")?.[0]?.split("-")?.reverse()?.join("-")
        );
        index = 0;
        const returnData = [...last, (count / 24)?.toFixed(2)];
        count = 0;
        return returnData;
      }
      return [...last];
    }, []);

  return {
    dailyData: dailyWeatherDataUpdated,
    date,
  };
};
//evaluates daily basis data and returns
export const evaluateWeeklyBasedData = (dailyWeatherData: any) => {
  let weeklyIndex: number = 0;
  let weeklyCount: number = 0;

  return dailyWeatherData?.slice(0, 384)?.reduce((last: any, curr: any) => {
    weeklyCount += curr?.temperature;
    weeklyIndex++;
    if (weeklyIndex === 168) {
      weeklyIndex = 0;
      const returnData = [...last, (weeklyCount / 168)?.toFixed(2)];
      weeklyCount = 0;
      return returnData;
    }
    return [...last];
  }, []);
};

//creates data according to the currently selected criteria
export const handleSelectionCriteria = (
  selectedCriteria: string,
  dailyWeatherData: IdailyWeatherData[]
) => {
  switch (selectedCriteria) {
    case ISelectedCriteria.Today:
      return evaluateTodayAndTomorrowData(dailyWeatherData, 0, 24)
    case ISelectedCriteria.Tomorrow:
      const data = evaluateTodayAndTomorrowData(dailyWeatherData, 24, 48);
      return [...data]
    case ISelectedCriteria.Daily:
      const { dailyData, date } = evaluateDailyBasedData(dailyWeatherData);
      return [
        ...date?.map((item, index) => {
          return { time: item, temperature: dailyData[index] };
        }),
      ]

    case ISelectedCriteria.Weekly:
      let weeklyData = evaluateWeeklyBasedData(dailyWeatherData);

      return [
        ...weekly?.map((item, index) => {
          return { time: item, temperature: weeklyData[index] };
        }),
      ]

    default:
      break;
  }
};
