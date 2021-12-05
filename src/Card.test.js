import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", () => {
  render(<Card />);
});

it("renders the same snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

