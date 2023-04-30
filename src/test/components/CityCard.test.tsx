import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cityCardPropsMock } from "../../utils/mock";
import CityCard from "../../components/CityCard";

test("it should render cityCard component without crashing and appropriate data", async () => {
  render(<CityCard {...cityCardPropsMock} />);

  expect(await screen.findByText("India")).toBeInTheDocument();
  expect(await screen.findByText("Central Delhi")).toBeInTheDocument();
  expect(await screen.findByText("29.8")).toBeInTheDocument();
});
test("it should render cityCard component with the optional data", async () => {
  const updatedPropsMock = {...cityCardPropsMock};
  //@ts-ignore
  delete updatedPropsMock.city;
  render(<CityCard {...updatedPropsMock} />);


  expect(await screen.findByText("temp not available")).toBeInTheDocument();
  expect(await screen.findByText("City not available")).toBeInTheDocument();
  expect(await screen.findByText("no district found")).toBeInTheDocument();
});
