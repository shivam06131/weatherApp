import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customSelectPropsMock } from "../../utils/mock";
import CustomSelect from "../../components/CustomSelect";
import userEvent from "@testing-library/user-event";

test("it should render CustomSelect without crashing with week selection", async () => {
  const updatedMock = {
    ...customSelectPropsMock,
    //we cannot have this just in mock file (as it wont work)
    setterFunction: jest.fn(),
  };
  render(<CustomSelect {...updatedMock} />);
  const defaultValue = await screen.findByText("Week 1");
  expect(defaultValue).toBeInTheDocument();

  //After click, it should show wee1 & week2 (list items)
  userEvent.click(defaultValue);
  const week2 = await screen.findByText("Week 2");
  expect(week2).toBeInTheDocument();

  //clicking on list item (week 2)
  userEvent.click(week2);
});
