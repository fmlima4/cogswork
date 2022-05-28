import ShiftHistory from "../components/ShiftHistory/ShiftHistory";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import fetch from "node-fetch";

describe("ShiftHistory", () => {
    it("should renders the table on screen", () => {
      render(<ShiftHistory />);
      expect(screen.getByTestId("table")).toBeInTheDocument();
    });
});