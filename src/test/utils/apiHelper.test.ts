/**
 * @jest-environment node
 */
import {
  allWeatherData,
  cityCordinatesInfo,
  fetchCityName,
} from "../../utils/Api/apiHelper";

test("it should properly exicute allWeatherData", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      json: jest
        .fn()
        .mockResolvedValueOnce({ testResonseKey: "testResponseValue" }),
    })
    .mockReturnValueOnce("test rejected");

  expect(
    await allWeatherData({ latitude: 23.0438564, longitude: 72.5086395 }, 16)
  ).toEqual({ testResonseKey: "testResponseValue" });
  //catch block
  expect(
    await allWeatherData({ latitude: 23.0438564, longitude: 72.5086395 }, 16)
  ).toEqual(undefined);
});

test("it should properly exicute cityCordinatesInfo", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      json: jest
        .fn()
        .mockResolvedValueOnce({ testResonseKey: "testResponseValue" }),
    })
    .mockReturnValueOnce("test rejected");

  expect(await cityCordinatesInfo("testCity")).toEqual({
    testResonseKey: "testResponseValue",
  });
  //catch block
  expect(await cityCordinatesInfo("testCity")).toEqual(undefined);
});

test("it should properly exicute fetchCityName", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      json: jest
        .fn()
        .mockResolvedValueOnce({ testResonseKey: "testResponseValue" }),
    })
    .mockReturnValueOnce("test rejected");

  expect(
    await fetchCityName({ latitude: 23.0438564, longitude: 72.5086395 })
  ).toEqual({
    testResonseKey: "testResponseValue",
  });
  //catch block
  expect(
    await fetchCityName({ latitude: 23.0438564, longitude: 72.5086395 })
  ).toEqual(undefined);
});
