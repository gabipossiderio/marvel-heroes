import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

vi.mock("./services/marvelApi", () => ({
  fetchCharacters: vi.fn().mockImplementation(() => {
    return Promise.resolve({
      results: [
        {
          id: 1,
          name: "Spider-Man",
          thumbnail: { path: "image", extension: "jpg" },
          series: { items: [{ name: "Amazing Spider-Man" }] },
          events: { items: [{ name: "Civil War" }] },
        },
      ],
      total: 1563
    });
  }),
}));

describe("App", () => {
  it("renders main header", () => {
    render(<App />);
    expect(screen.getByText("Busca de personagens")).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Nome do personagem")
    ).toBeInTheDocument();
    expect(screen.getByText("Nome do personagem")).toBeInTheDocument();
  });

  it("renders character table headers", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Personagem")).toBeInTheDocument();
      expect(screen.getByText("Séries")).toBeInTheDocument();
      expect(screen.getByText("Eventos")).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("shows loading state", () => {
    render(<App />);
    expect(screen.getByText("Carregando personagens...")).toBeInTheDocument();
  });

  it("searches characters when typing", async () => {
    const { fetchCharacters } = await import("./services/marvelApi");
    const mockFetchCharacters = vi.mocked(fetchCharacters);

    render(<App />);
    const searchInput = screen.getByPlaceholderText("Nome do personagem");

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    }, { timeout: 2000 });

    mockFetchCharacters.mockClear();
    await userEvent.type(searchInput, "iron");

    await waitFor(
      () => {
        expect(mockFetchCharacters).toHaveBeenCalledWith("iron", 0);
      },
      { timeout: 2000 }
    );
  });

  it("reloads initial characters when search is cleared", async () => {
    const { fetchCharacters } = await import("./services/marvelApi");
    const mockFetchCharacters = vi.mocked(fetchCharacters);

    render(<App />);
    const searchInput = screen.getByPlaceholderText("Nome do personagem");

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    }, { timeout: 2000 });

    mockFetchCharacters.mockClear();
    await userEvent.type(searchInput, "iron");

    await waitFor(
      () => {
        expect(mockFetchCharacters).toHaveBeenCalledWith("iron", 0);
      },
      { timeout: 2000 }
    );

    mockFetchCharacters.mockClear();
    await userEvent.clear(searchInput);

    await waitFor(
      () => {
        expect(mockFetchCharacters).toHaveBeenCalledWith("", 0);
      },
      { timeout: 2000 }
    );
  });

  it("renders pagination controls with conditional navigation", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    }, { timeout: 2000 });

    expect(
      screen.queryByRole("button", { name: "Primeira página" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Página anterior" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Página 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Próxima página" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Última página" })
    ).toBeInTheDocument();
  });

  it("navigates to next page when clicking next button", async () => {
    const { fetchCharacters } = await import("./services/marvelApi");
    const mockFetchCharacters = vi.mocked(fetchCharacters);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    }, { timeout: 2000 });

    mockFetchCharacters.mockClear();
    const nextButton = screen.getByRole("button", { name: "Próxima página" });
    await userEvent.click(nextButton);

    await waitFor(() => {
      expect(mockFetchCharacters).toHaveBeenCalledWith("", 10);
    });
  });

  it("shows current page as active and hides navigation when on first page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    }, { timeout: 2000 });

    const currentPageButton = screen.getByRole("button", { name: "Página 1" });
    expect(currentPageButton).toHaveAttribute("disabled");

    expect(
      screen.queryByRole("button", { name: "Primeira página" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Página anterior" })
    ).not.toBeInTheDocument();
  });
});
