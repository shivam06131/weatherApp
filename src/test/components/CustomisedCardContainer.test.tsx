import {  render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomisedCardContainer from "../../components/CustomisedCardContainer";
import { customisedCardComponent } from "../../utils/mock";
import userEvent from "@testing-library/user-event";

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

test("it should render CustomisedCardContainer without crashing", async () => {
  const updatedMock = {
    ...customisedCardComponent,
    //we cannot have this just in mock file (as it wont work)
    setDailyWeatherData: jest.fn(),
    setSelectedCriteria: jest.fn(),
    setSelectedTime: jest.fn(),
  };

render(<CustomisedCardContainer {...updatedMock} />);
 

  expect(await screen.findByText('Get Customised Data')).toBeInTheDocument()
  expect(await screen.findByText('Weekly')).toBeInTheDocument()
  expect(await screen.findByText('Week 1')).toBeInTheDocument()
  const removeCardButton = await screen.findByText('Remove Card')
  expect(removeCardButton).toBeInTheDocument()

  userEvent.click(removeCardButton);
});
