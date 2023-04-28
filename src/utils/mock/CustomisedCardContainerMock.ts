import { ICustomisedCardContainerProps } from "../type";

export const customisedCardComponent: ICustomisedCardContainerProps = {
  selectedCriteria: "Weekly",
  selectedCriteriaData: [
    {
      time: "Week 1",
      temperature: 29.38,
    },
    {
      time: "Week 2",
      temperature: 34.4,
    },
  ],
  selectedTime: "",
  customisedData: "29.38",
  list: ["Today", "Tomorrow", "Daily", "Weekly"],
  setDailyWeatherData: jest.fn(),
  setSelectedCriteria: jest.fn(),
  setSelectedTime: jest.fn(),
};
