import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customTypographyPorpsMock } from "../../utils/mock";
import CustomTypography from "../../components/CustomTypography";

test("it should render cityCard CityCardContainer without crashing", async () => {
  render(<CustomTypography {...customTypographyPorpsMock} />);
  expect(await screen.findByText("Ahmedabad District")).toBeInTheDocument();
});

test("it should take default height widht for loader", async () => {
  const updatedProps = {
    ...customTypographyPorpsMock,
    condition : false,
  };
  delete updatedProps?.loaderHeightWidth;
  
  render(<CustomTypography {...updatedProps} />);
});
