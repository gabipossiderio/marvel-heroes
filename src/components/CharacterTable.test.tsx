import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CharacterTable } from './CharacterTable'
import { ThemeProvider } from '../contexts/ThemeProvider'
import type { Character } from '../types/Character'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

const mockCharacters: Character[] = [
  {
    id: 1,
    name: 'Spider-Man',
    thumbnail: { path: 'spiderman', extension: 'jpg' },
    series: { items: [{ name: 'Amazing Spider-Man' }] },
    events: { items: [{ name: 'Civil War' }] }
  },
  {
    id: 2,
    name: 'Iron Man',
    thumbnail: { path: 'ironman', extension: 'jpg' },
    series: { items: [{ name: 'Iron Man' }] },
    events: { items: [{ name: 'Avengers' }] }
  }
]

const renderWithTheme = (component: React.ReactElement) => {
  localStorageMock.getItem.mockReturnValue('light')
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
}

describe('CharacterTable', () => {
  it('renders characters in table format', () => {
    renderWithTheme(<CharacterTable characters={mockCharacters} />)

    expect(screen.getByAltText('Spider-Man')).toBeInTheDocument()
    expect(screen.getByAltText('Iron Man')).toBeInTheDocument()
  })

  it('calls onCharacterClick when character is clicked', () => {
    const onCharacterClickMock = vi.fn()
    renderWithTheme(
      <CharacterTable
        characters={mockCharacters}
        onCharacterClick={onCharacterClickMock}
      />
    )

    const spidermanRow = screen.getByTestId('character-row-1')
    fireEvent.click(spidermanRow)

    expect(onCharacterClickMock).toHaveBeenCalledWith(mockCharacters[0])
  })

  it('adds hover cursor pointer when onCharacterClick is provided', () => {
    const onCharacterClickMock = vi.fn()
    renderWithTheme(
      <CharacterTable
        characters={mockCharacters}
        onCharacterClick={onCharacterClickMock}
      />
    )

    const spidermanRow = screen.getByTestId('character-row-1')
    expect(spidermanRow).toHaveStyle('cursor: pointer')
  })

  it('still shows pointer cursor even when onCharacterClick is not provided', () => {
    renderWithTheme(<CharacterTable characters={mockCharacters} />)

    const spidermanRow = screen.getByTestId('character-row-1')
    expect(spidermanRow).toHaveStyle('cursor: pointer')
  })
})