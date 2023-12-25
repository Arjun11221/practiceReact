import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test('Contact component is loaded', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test('Button component is loaded', () => { 
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test('Button component is loaded', () => { 
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});