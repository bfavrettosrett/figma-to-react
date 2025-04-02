import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
    it("renders unchecked by default", () => {
        render(<Checkbox label="Test" />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    });

    it("renders with label", () => {
        render(<Checkbox label="Test Label" />);
        expect(screen.getByText("Test Label")).toBeInTheDocument();
    });

    it("handles onChange event", () => {
        const handleChange = jest.fn();
        render(<Checkbox label="Test" onChange={handleChange} />);
        fireEvent.click(screen.getByRole("checkbox"));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it("is disabled when disabled prop is true", () => {
        const handleChange = jest.fn();
        render(<Checkbox label="Test" disabled onChange={handleChange} />);
        fireEvent.click(screen.getByRole("checkbox"));
        expect(handleChange).not.toHaveBeenCalled();
    });
});
