import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CharacterTable } from './CharacterTable'
import type { Character } from '../types/Character'

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

describe('CharacterTable', () => {
  it('renders characters in table format', () => {
    render(<CharacterTable characters={mockCharacters} />)

    expect(screen.getByAltText('Spider-Man')).toBeInTheDocument()
    expect(screen.getByAltText('Iron Man')).toBeInTheDocument()
  })

  it('calls onCharacterClick when character is clicked', () => {
    const onCharacterClickMock = vi.fn()
    render(
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
    render(
      <CharacterTable
        characters={mockCharacters}
        onCharacterClick={onCharacterClickMock}
      />
    )

    const spidermanRow = screen.getByTestId('character-row-1')
    expect(spidermanRow).toHaveStyle('cursor: pointer')
  })

  it('still shows pointer cursor even when onCharacterClick is not provided', () => {
    render(<CharacterTable characters={mockCharacters} />)

    const spidermanRow = screen.getByTestId('character-row-1')
    expect(spidermanRow).toHaveStyle('cursor: pointer')
  })
})