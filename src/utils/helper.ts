import { SetStateAction } from "react";
import { allWeatherData, cityCordinatesInfo, fetchCityName } from "./Api";
import { ICityListData, Icordinates, IdailyWeatherData } from "./type/types";
import { ISelectedCriteria } from "./type";
import { weekly } from "./constants";

//fetch city name on the basis of latitude and logitude.
export const getCityName = async (
  latitude: number,
  longitude: number,
  cityName: any,
  setCityName: any
) => {
  try {
    const data = await fetchCityName({ latitude, longitude });
    setCityName({ ...cityName, ...data });
  } catch (error) {
    console.log("getCityName: something went wrong ", error);
  }
};

//fetch temperature on the basis of latitude and logitude.
export const fetchWeatherData = async (
  cordinates: Icordinates,
  setCurrentWeather: any,
  currentWeather: any,
  setDailyWeatherData?: React.Dispatch<SetStateAction<IdailyWeatherData[]>>
) => {
  try {
    const data = await allWeatherData(cordinates, 16);
    setCurrentWeather({ ...currentWeather, ...data });
    if (setDailyWeatherData) {
      const reformatedData = reformatTimeWiseWeather(data);
      setDailyWeatherData([...reformatedData]);
    }
  } catch (error) {
    console.log("fetchWeatherData: something went wrong ", error);
  }
};

//fetch city lat & lon and after that fetch wetather data
export const fetchWeatherDataForCity = async (
  cityData: string[],
  cityListData: ICityListData[],
  setCityListData: React.Dispatch<SetStateAction<ICityListData[]>>,
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
      return setCityListData([...cityListData]);
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

    setCityListData([...reversed]);
    setLoader(false);
  } catch (error) {
    console.log("fetchWeatherDataForCity: something went wrong ", error);
  }
};

//get users current location cordinates (latitude & longiture)
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

//reformat data
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
//evaluates daily bassis data and returns
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
//evaluates daily bassis data and returns
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

export const handleSelctionCriteria = (
  selectedCriteria: string,
  setSelectedCriteriaData: React.Dispatch<SetStateAction<IdailyWeatherData[]>>,
  dailyWeatherData: IdailyWeatherData[]
) => {
  console.log("🚀 ~ file: helper.ts:196 ~ selectedCriteria:", selectedCriteria)
  switch (selectedCriteria) {
    case ISelectedCriteria.Today:
      setSelectedCriteriaData(
        evaluateTodayAndTomorrowData(dailyWeatherData, 0, 24)
      );
      break;
    case ISelectedCriteria.Tomorrow:
      const data = evaluateTodayAndTomorrowData(dailyWeatherData, 24, 48);
      setSelectedCriteriaData([...data]);
      break;
    case ISelectedCriteria.Daily:
      const { dailyData, date } = evaluateDailyBasedData(dailyWeatherData);
      setSelectedCriteriaData([
        ...date?.map((item, index) => {
          return { time: item, temperature: dailyData[index] };
        }),
      ]);
      break;

    case ISelectedCriteria.Weekly:
      let weeklyData = evaluateWeeklyBasedData(dailyWeatherData);
      setSelectedCriteriaData([
        ...weekly?.map((item, index) => {
          return { time: item, temperature: weeklyData[index] };
        }),
      ]);
      break;

    default:
      break;
  }
};
