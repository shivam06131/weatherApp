import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CityCardContainer from "../../components/CityCardContainer";
import { cityCardContainerPropsMock } from "../../utils/mock";

test("it should render cityCard CityCardContainer without crashing and appropriate data", async () => {
  render(<CityCardContainer {...cityCardContainerPropsMock} />);

  expect(await screen.findByText("Searched Result")).toBeInTheDocument();
  expect(await screen.findByText("Clear")).toBeInTheDocument();
});

test("it should render cityCard with two cards", async () => {
  const udpatedProps = {
    ...cityCardContainerPropsMock,
    setCityListData: jest.fn(),
  };
  render(<CityCardContainer {...udpatedProps} />);

  expect(await screen.findByText("Searched Result")).toBeInTheDocument();
  expect(await screen.findByText("Clear")).toBeInTheDocument();
  expect(await screen.findByText("delhi")).toBeInTheDocument();
  expect(await screen.findByText("29.8")).toBeInTheDocument();
  expect(await screen.findByText("latitude 28.65")).toBeInTheDocument();
  expect(await screen.findByText("Central Delhi")).toBeInTheDocument();

  expect(await screen.findByText("goa")).toBeInTheDocument();
  expect(await screen.findByText("32.9")).toBeInTheDocument();
  expect(await screen.findByText("latitude 15.30")).toBeInTheDocument();
  expect(await screen.findByText("longitude 74.09")).toBeInTheDocument();

  const clearButton = await screen.findByText(/Clear/);
  expect(clearButton).toBeInTheDocument();

  //click on clearButton
  fireEvent.click(clearButton);
});
