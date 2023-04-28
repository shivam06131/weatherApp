import { ICustomSelectProps } from "../type";

export const customSelectPropsMock : ICustomSelectProps = {
  data: [
    {
      time: "Week 1",
      temperature: 29.38,
    },
    {
      time: "Week 2",
      temperature: 34.40,
    },
  ],
  setVariable: "",
  filteringCriteria: "Week 1",
  setterFunction : jest.fn(),
};
