import {
  evaluateDailyBasedData,
  evaluateTodayAndTomorrowData,
  evaluateWeeklyBasedData,
  fetchWeatherData,
  fetchWeatherDataForCity,
  getCityName,
  getCurrentLocation,
  handleSelctionCriteria,
} from "../../utils";
import * as apiHelperModule from "../../utils/Api/apiHelper";
import {
  allWeatherReturnMock,
  cityCordinatesInfoMock,
  cityListData,
  dailyWeatherDataMock,
  rawDailyWeatherDataMock,
} from "../../utils/mock/helperMock";
import { ICityListData } from "../../utils/type";

beforeEach(() => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation(() => {
      return {
        latitude: 23.0438564,
        longitude: 72.5086395,
        accuracy: 5,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      };
    }),
  };

  //@ts-ignore
  global.navigator.geolocation = mockGeolocation;
});

test("it should properly exicute getCityName", async () => {
  const fetchCityNameApiSpy = jest
    .spyOn(apiHelperModule, "fetchCityName")
    .mockResolvedValueOnce({
      testKey: "testvalue",
    })
    .mockRejectedValueOnce("test rejected");

  //try block
  expect(
    await getCityName(123.123, 123.123, "testCity", jest.fn())
  ).toBeUndefined();
  expect(fetchCityNameApiSpy).toHaveBeenCalledTimes(1);
  //catch block
  expect(
    await getCityName(123.123, 123.123, "testCity", jest.fn())
  ).toBeUndefined();
  expect(fetchCityNameApiSpy).toHaveBeenCalledTimes(2);
});

test("it should properly exicute fetchWeatherData", async () => {
  const allWeatherDataSpy = jest
    .spyOn(apiHelperModule, "allWeatherData")
    .mockResolvedValueOnce(allWeatherReturnMock)
    .mockRejectedValueOnce("test rejected");

  //try block
  expect(
    await fetchWeatherData(
      { latitude: 123.123, longitude: 123.123 },
      jest.fn(),
      "test-weather",
      jest.fn()
    )
  ).toBeUndefined();
  expect(allWeatherDataSpy).toHaveBeenCalledTimes(1);
  //catch block
  expect(
    await fetchWeatherData(
      { latitude: 123.123, longitude: 123.123 },
      jest.fn(),
      "test-weather",
      jest.fn()
    )
  ).toBeUndefined();
  expect(allWeatherDataSpy).toHaveBeenCalledTimes(2);
});

test("it should properly exicute fetchWeatherDataForCity", async () => {
  const fetchCityNameApiSpy = jest
    .spyOn(apiHelperModule, "cityCordinatesInfo")
    .mockResolvedValueOnce(cityCordinatesInfoMock)
    .mockRejectedValueOnce("test rejected")
    .mockRejectedValueOnce({error : 'testerror'});

  //try block
  expect(
    await fetchWeatherDataForCity(
      ["goa"],
      cityListData as ICityListData[],
      jest.fn(),
      jest.fn()
    )
  ).toBeUndefined();
  expect(fetchCityNameApiSpy).toHaveBeenCalledTimes(1);
  //   catch block
  expect(
    await fetchWeatherDataForCity(["goa"], cityListData, jest.fn(), jest.fn())
  ).toBeUndefined();
  expect(fetchCityNameApiSpy).toHaveBeenCalledTimes(2);

  expect(
    await fetchWeatherDataForCity(["goa"], cityListData, jest.fn(), jest.fn())
  ).toBeUndefined();
  expect(fetchCityNameApiSpy).toHaveBeenCalledTimes(3);
});

test("it should properly exicute getCurrentLocation", async () => {
  expect(
    getCurrentLocation(
      "goa",
      jest.fn(),
      { latitude: 123.123, longitude: 123.123 },
      jest.fn()
    )
  ).toBeUndefined();
});

test("it should properly exicute evaluateTodayAndTomorrowData", () => {
  expect(evaluateTodayAndTomorrowData(dailyWeatherDataMock, 0, 3)).toEqual([
    { temperature: 26.7, time: "01:00" },
    { temperature: 26.4, time: "02:00" },
    { temperature: 26.9, time: "03:00" },
  ]);
});
test("it should properly exicute evaluateDailyBasedData", () => {
  const functionCall = evaluateDailyBasedData(rawDailyWeatherDataMock);
  //15 days data
  expect(functionCall?.dailyData?.length).toEqual(15);
});
test("it should properly exicute evaluateWeeklyBasedData", () => {
  const functionCall = evaluateWeeklyBasedData(rawDailyWeatherDataMock);
  //2 weeks data
  expect(functionCall?.length).toEqual(2);
});

test("it should properly exicute handleSelctionCriteria", () => {
  expect(
    handleSelctionCriteria("Today", jest.fn(), dailyWeatherDataMock)
  ).toEqual(undefined);
  expect(
    handleSelctionCriteria("Tomorrow", jest.fn(), dailyWeatherDataMock)
  ).toEqual(undefined);
  expect(
    handleSelctionCriteria("Daily", jest.fn(), dailyWeatherDataMock)
  ).toEqual(undefined);
  expect(
    handleSelctionCriteria("Weekly", jest.fn(), dailyWeatherDataMock)
  ).toEqual(undefined);
});
