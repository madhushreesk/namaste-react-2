import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contains test cases for contact us page", () => {
  test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should contain 1 textBox", () => {
    render(<ContactUs />);

    const text = screen.getByPlaceholderText("Your Name");

    expect(text).toBeInTheDocument();
  });
});
