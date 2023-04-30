import React from "react";
import { render } from "@testing-library/react";
import CustomPopup from "../../components/CustomPopup";

test("it should render CustomPopup without crashing", async () => {
  //this will be responsible for the loader on the screen
  render(<CustomPopup />);
});
