import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'
import { ThemeProvider } from '../contexts/ThemeProvider'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('ThemeToggle', () => {
  const renderWithTheme = (initialTheme: 'light' | 'dark' = 'light') => {
    localStorageMock.getItem.mockReturnValue(initialTheme)
    return render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
  }

  it('renders toggle button', () => {
    renderWithTheme()

    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeInTheDocument()
  })

  it('shows sun icon for light theme', () => {
    renderWithTheme('light')

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Alterar para tema escuro')
    expect(button.textContent).toContain('☀️')
  })

  it('shows moon icon for dark theme', () => {
    renderWithTheme('dark')

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Alterar para tema claro')
    expect(button.textContent).toContain('🌙')
  })

  it('toggles theme when clicked', () => {
    renderWithTheme('light')

    const button = screen.getByRole('button')

    expect(button.textContent).toContain('☀️')

    fireEvent.click(button)

    expect(button.textContent).toContain('🌙')
    expect(button).toHaveAttribute('aria-label', 'Alterar para tema claro')
  })

  it('calls localStorage when toggling theme', () => {
    renderWithTheme('light')

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
  })

  it('has proper accessibility attributes', () => {
    renderWithTheme()

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
    expect(button).toHaveAttribute('type', 'button')
  })
})