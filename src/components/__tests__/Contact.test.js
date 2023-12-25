import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
  it("Contact component is loaded", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Button component is loaded", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Button component is loaded", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Two inputs onto the page", () => {
    // render
    render(<Contact />);

    // querying
    const twoInputs = screen.getAllByRole("textbox");

    // Assertion

    expect(twoInputs.length).toBe(2);
  });
});
