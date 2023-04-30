import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("it should render App and it's internal components", async () => {
  render(<App />);

  expect(await screen.findByText('Weather')).toBeInTheDocument();
  expect(await screen.findByText('Live Data')).toBeInTheDocument();
  expect(await screen.findByText('Get Customised Data')).toBeInTheDocument();
  expect(await screen.findByText('Criteria')).toBeInTheDocument();
});
