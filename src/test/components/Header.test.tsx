import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";
import { headerPorpsMock } from "../../utils/mock";

test("it should Header without crashing", async () => {
  render(<Header {...headerPorpsMock} />);

  expect(await screen.findByText("🌦️Weather")).toBeInTheDocument();
  const searchBar = await screen.findByPlaceholderText("Search…");
  expect(searchBar).toBeInTheDocument();


    fireEvent.change(searchBar as HTMLInputElement, {
      target: { value: "test-input" },
    });
});
