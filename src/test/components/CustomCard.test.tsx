import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customCardPropsMock } from "../../utils/mock";
import CustomCard from "../../components/CustomCard";

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

test("it should render cityCard CityCardContainer without crashing", async () => {
  const updatedMock = {
    ...customCardPropsMock,
    //we cannot have this just in mock file (as it wont work)
    setDailyWeatherData: jest.fn(),
  };
  render(<CustomCard {...updatedMock} />);
});
