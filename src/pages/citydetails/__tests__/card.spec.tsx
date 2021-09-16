import { screen, render } from "@testing-library/react";

import Card from "../card";

const props = {
  min: 19.77,
  max: 33.11,
  dt: 1631718000,
  icon: "04d",
};

describe("<Card />", () => {
  it("must show card date on weekday, dd/mm format", () => {
    render(<Card {...props} />);

    expect(screen.getByTestId(/forecast-card/i)).toBeInTheDocument();
    expect(screen.getByText(/qua\., 15\/09/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/34ºc/i)).toHaveStyle({ color: "#000" });
    expect(screen.getByText(/20ºc/i)).toHaveStyle({ color: "#999" });
  });
});
