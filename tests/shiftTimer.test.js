import ShiftTimer from "../components/ShiftTimer/ShitTimer";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { notEqual } from "assert";
import fetch from "node-fetch";

describe("ShiftTimer", () => {
    it("should renders the timer on screen", () => {
      render(<ShiftTimer />);
      expect(screen.getByTestId("timer")).toBeInTheDocument();
    });

    it("should start the timer on screen with 0s", () => {
      render(<ShiftTimer />);
      const seconds = screen.getByTestId("time");
      const expected = '0s'

      expect(seconds.textContent).toEqual(expected);
    });

    it("should start the timer on click button", () => {
      render(<ShiftTimer />);
      const startShiftButton = screen.getByTestId("startButton");
      fireEvent.click(startShiftButton)
      setTimeout(() => {  console.log("counting"); }, 2000);
      const seconds = screen.getByTestId("time");
      const expected = '2s'

      expect(seconds.textContent).toEqual(expected);
    });
});

