import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from './SearchInput'
import { ThemeProvider } from '../contexts/ThemeProvider'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

const matchMediaMock = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))
Object.defineProperty(window, 'matchMedia', { value: matchMediaMock })

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('SearchInput', () => {
  it('renders search input with label', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="" onChange={mockOnChange} />)

    expect(screen.getByLabelText('Nome do personagem')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'Spider' } })

    expect(mockOnChange).toHaveBeenCalledWith('Spider')
  })

  it('displays current value', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="Iron Man" onChange={mockOnChange} />)

    const input = screen.getByDisplayValue('Iron Man')
    expect(input).toBeInTheDocument()
  })

  it('shows clear button when there is text', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="Spider" onChange={mockOnChange} />)

    expect(screen.getByLabelText('Limpar pesquisa')).toBeInTheDocument()
  })

  it('hides clear button when input is empty', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="" onChange={mockOnChange} />)

    expect(screen.queryByLabelText('Limpar pesquisa')).not.toBeInTheDocument()
  })

  it('clears input when clear button is clicked', () => {
    const mockOnChange = vi.fn()

    renderWithTheme(<SearchInput value="Spider Man" onChange={mockOnChange} />)

    const clearButton = screen.getByLabelText('Limpar pesquisa')
    fireEvent.click(clearButton)

    expect(mockOnChange).toHaveBeenCalledWith('')
  })
})