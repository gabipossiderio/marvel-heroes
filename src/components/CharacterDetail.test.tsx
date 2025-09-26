import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CharacterDetail } from './CharacterDetail'
import { ThemeProvider } from '../contexts/ThemeProvider'
import type { Character } from '../types/Character'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

const mockCharacter: Character = {
  id: 1,
  name: 'Spider-Man',
  description: 'Friendly neighborhood Spider-Man',
  thumbnail: { path: 'spiderman', extension: 'jpg' },
  series: {
    items: [
      { name: 'Amazing Spider-Man', resourceURI: 'series/1' },
      { name: 'Ultimate Spider-Man', resourceURI: 'series/2' }
    ]
  },
  comics: {
    items: [
      { name: 'Amazing Spider-Man #1', resourceURI: 'comics/1' },
      { name: 'Amazing Spider-Man #2', resourceURI: 'comics/2' }
    ]
  },
  events: {
    items: [
      { name: 'Civil War', resourceURI: 'events/1' },
      { name: 'Secret Wars', resourceURI: 'events/2' }
    ]
  }
}

const renderWithTheme = (component: React.ReactElement) => {
  localStorageMock.getItem.mockReturnValue('light')
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
}

describe('CharacterDetail', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays character name and description', () => {
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={() => {}} />)

    expect(screen.getByText('Spider-Man')).toBeInTheDocument()
    expect(screen.getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument()
  })

  it('displays character image', () => {
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={() => {}} />)

    const image = screen.getByAltText('Spider-Man')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'spiderman.jpg')
  })

  it('displays comics section with title and list', () => {
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={() => {}} />)

    expect(screen.getByText('Comics')).toBeInTheDocument()
    expect(screen.getByText('Amazing Spider-Man #1')).toBeInTheDocument()
    expect(screen.getByText('Amazing Spider-Man #2')).toBeInTheDocument()
  })

  it('displays series section with title and list', () => {
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={() => {}} />)

    expect(screen.getByText('Séries')).toBeInTheDocument()
    expect(screen.getByText('Amazing Spider-Man')).toBeInTheDocument()
    expect(screen.getByText('Ultimate Spider-Man')).toBeInTheDocument()
  })

  it('displays events section with title and list', () => {
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={() => {}} />)

    expect(screen.getByText('Eventos')).toBeInTheDocument()
    expect(screen.getByText('Civil War')).toBeInTheDocument()
    expect(screen.getByText('Secret Wars')).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', () => {
    const onBackMock = vi.fn()
    renderWithTheme(<CharacterDetail character={mockCharacter} onBack={onBackMock} />)

    const backButton = screen.getByText('Voltar')
    backButton.click()

    expect(onBackMock).toHaveBeenCalledTimes(1)
  })

  it('handles character without description gracefully', () => {
    const characterWithoutDescription = { ...mockCharacter, description: '' }
    renderWithTheme(<CharacterDetail character={characterWithoutDescription} onBack={() => {}} />)

    expect(screen.getByText('Spider-Man')).toBeInTheDocument()
    expect(screen.queryByText('Friendly neighborhood Spider-Man')).not.toBeInTheDocument()
  })
})