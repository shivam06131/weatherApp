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
