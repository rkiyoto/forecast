import { rest } from "msw";

import { MOCK_CITY_WEATHER, MOCK_CITY_FORECAST } from "./mock";

export const WEATHER_HANDLERS = [
  rest.get("https://api.openweathermap.org/data/2.5/weather", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_CITY_WEATHER))
  ),
];

export const FORECAST_HANDLERS = [
  rest.get("https://api.openweathermap.org/data/2.5/onecall", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_CITY_FORECAST))
  ),
];
