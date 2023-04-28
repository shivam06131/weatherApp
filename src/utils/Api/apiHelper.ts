import { Icordinates } from "../type";

export const allWeatherData = async (cordinates: Icordinates, days: number) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${cordinates?.latitude}&longitude=${cordinates?.longitude}&hourly=temperature_2m&current_weather=true&&forecast_days=${days}`
    );
    return await response.json();
  } catch (error) {
    console.log("allWeatherData: something went wrong: ", error);
  }
};

export const cityCordinatesInfo = async (currentCity: string) => {
  try {
    const cityCordinates = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=a47ec1100cf64526b3cf924711e95230&q=${currentCity}`
    );
    return await cityCordinates.json();
  } catch (error) {
    console.log("cityCordinatesInfo: something went wrong ", error);
  }
};

export const fetchCityName = async (cordinates: Icordinates) => {
  try {
    const { latitude, longitude } = cordinates;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=a47ec1100cf64526b3cf924711e95230&q=${latitude}%2C${longitude}&pretty=1`
    );

    return await response.json();
  } catch (error) {
    console.log("fetchCityName: something went wrong ", error);
  }
};
