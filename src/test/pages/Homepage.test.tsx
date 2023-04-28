import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  currentWeatherDataAPIMock,
  weatherDataFor2Weeks,
} from "../../utils/mock/homePageMock";
import Homepage from "../../pages/Homepage";
import * as apiHelperModule from '../../utils/Api/apiHelper'
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// nock("https://api.opencagedata.com")
//   .get(
//     "/geocode/v1/json?key=a47ec1100cf64526b3cf924711e95230&q=23.0438564%2C72.5086395&pretty=1"
//   )
//   .reply(200, currentWeatherDataAPIMock);

// nock("https://api.open-meteo.com")
//   .get(
//     "/v1/forecast?latitude=23.0438564&longitude=72.5086395&hourly=temperature_2m&current_weather=true&&forecast_days=16"
//   )
//   .reply(200, weatherDataFor2Weeks);

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

afterEach(() => {
  jest.restoreAllMocks();
});

test("it should render HomePage without crashing", async () => {
  //@ts-ignore
  jest.spyOn(apiHelperModule , 'fetchCityName').mockImplementation(() => currentWeatherDataAPIMock)
  jest.spyOn(apiHelperModule , 'allWeatherData').mockResolvedValue(weatherDataFor2Weeks)
  render(<Homepage />);

  expect(await screen.findByText('Get Customised Data')).toBeInTheDocument()
  const criteria = await screen.findByText('Criteria');
  expect(criteria).toBeInTheDocument()

  act(() => {
    userEvent.click(criteria);
  })

  // screen.debug(undefined, 300000)
});
