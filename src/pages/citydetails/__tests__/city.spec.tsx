import { screen, render, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import {
  WEATHER_HANDLERS,
  FORECAST_HANDLERS,
} from "../../../services/test/handlers";

import CityForecast from "..";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    cityName: "campinas",
  }),
}));

const server = setupServer(...WEATHER_HANDLERS, ...FORECAST_HANDLERS);

describe("<CityForecast />", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("must show all components correctly", async () => {
    render(<CityForecast />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /campinas/i,
        })
      ).toBeInTheDocument();
    });

    expect(
      screen.getByRole("heading", {
        name: /19\.9 ºc/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId(/weather-icon/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /nublado/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId(/forecast-card/i)).toHaveLength(8);
  });

  it("must show error message on city not found", async () => {
    server.use(
      rest.get(
        "https://api.openweathermap.org/data/2.5/weather",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<CityForecast />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /cidade não encontrada\. :\(/i,
        })
      ).toBeInTheDocument();
    });
  });
});
