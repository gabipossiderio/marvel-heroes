import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 0.125rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  height: 3rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
    outline-offset: 0.125rem;
  }
`;

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const icon = isLight ? "🔆" : "🌙";
  const label = isLight
    ? "Alterar para tema escuro"
    : "Alterar para tema claro";

  return (
    <ToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {icon}
    </ToggleButton>
  );
};
