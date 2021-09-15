import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Home from "..";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "campinas,salvador,rio de janeiro,paris,dublin"),
      setItem: jest.fn(),
    },
    writable: true,
  });
});

describe("<Home />", () => {
  it("must load all components correctly", () => {
    render(<Home />);

    expect(screen.getByTestId("content-section")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ex: São Paulo/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /buscar/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /pesquisas recentes/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId(/history-list-view/i)).toBeInTheDocument();
  });

  it("must show recent search list", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => "campinas,salvador,rio de janeiro,paris,dublin"),
        setItem: jest.fn(),
      },
      writable: true,
    });
    render(<Home />);

    expect(screen.getAllByTestId(/city-row/i)).toHaveLength(5);
  });

  it("must add new city when searched", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    userEvent.type(screen.getByPlaceholderText(/ex: São Paulo/i), "piracicaba");
    userEvent.click(
      screen.getByRole("button", {
        name: /buscar/i,
      })
    );

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "citylist",
      "piracicaba,campinas,salvador,rio de janeiro,paris,dublin"
    );
  });

  it("must redirect user to forecast page on submit", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    userEvent.type(screen.getByPlaceholderText(/ex: São Paulo/i), "piracicaba");
    userEvent.click(
      screen.getByRole("button", {
        name: /buscar/i,
      })
    );

    expect(mockHistoryPush).toHaveBeenCalledWith("/piracicaba");
  });

  it("must avoid redirection if no input it typed", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /buscar/i,
      })
    );

    expect(mockHistoryPush).not.toHaveBeenCalled();
  });

  it("must redirect city list row click", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => "campinas,salvador,rio de janeiro,paris,dublin"),
        setItem: jest.fn(),
      },
      writable: true,
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const cityRow = await screen.getAllByTestId("city-row")[0];
    userEvent.click(cityRow);

    expect(mockHistoryPush).toHaveBeenCalledWith("/campinas");
  });

  it("must remove city from list on button click", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => "campinas,salvador,rio de janeiro,paris,dublin"),
        setItem: jest.fn(),
      },
      writable: true,
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const cityRowButton = await screen.getAllByRole("button", {
      name: /x/i,
    })[0];
    userEvent.click(cityRowButton);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "citylist",
      "salvador,rio de janeiro,paris,dublin"
    );
  });
});
