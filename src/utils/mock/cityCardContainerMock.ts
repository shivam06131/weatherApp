import { ICityCardContainer } from "../type";

export const cityCardContainerPropsMock: ICityCardContainer = {
  cityListData: [
    {
      Country: "India",
      stateDistrict: "Central Delhi",
      temperature: 29.8,
      longitude: 77.2219388,
      latitude: 28.6517178,
      currentCity: "delhi",
    },
    {
      Country: "India",
      temperature: 32.9,
      longitude: 74.0855134,
      latitude: 15.3004543,
      currentCity: "goa",
      stateDistrict: "",
    },
  ],
  setCityListData: jest.fn(),
};
