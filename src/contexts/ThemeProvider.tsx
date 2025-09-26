import { useState, useEffect, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { getTheme } from "../styles/theme";
import { ThemeContext, type Theme } from "./ThemeContext";
import { GlobalStyle } from "../styles/GlobalStyle";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const tokens = useMemo(() => getTheme(theme), [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, tokens }),
    [theme, toggleTheme, tokens]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={tokens}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
