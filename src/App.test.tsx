import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

vi.mock('./services/marvelApi', () => ({
  fetchCharacters: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: 'Spider-Man',
      thumbnail: { path: 'image', extension: 'jpg' },
      series: { items: [{ name: 'Amazing Spider-Man' }] },
      events: { items: [{ name: 'Civil War' }] }
    }
  ])
}))

describe('App', () => {
  it('renders main header', () => {
    render(<App />)
    expect(screen.getByText('Busca de personagens')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Nome do personagem')).toBeInTheDocument()
    expect(screen.getByText('Nome do personagem')).toBeInTheDocument()
  })

  it('renders character table headers', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Personagem')).toBeInTheDocument()
      expect(screen.getByText('Séries')).toBeInTheDocument()
      expect(screen.getByText('Eventos')).toBeInTheDocument()
    })
  })

  it('shows loading state', () => {
    render(<App />)
    expect(screen.getByText('Carregando personagens...')).toBeInTheDocument()
  })

  it('searches characters when typing', async () => {
    const { fetchCharacters } = await import('./services/marvelApi')
    const mockFetchCharacters = vi.mocked(fetchCharacters)

    render(<App />)
    const searchInput = screen.getByPlaceholderText('Nome do personagem')

    await waitFor(() => {
      expect(screen.getByText('Spider-Man')).toBeInTheDocument()
    })

    mockFetchCharacters.mockClear()
    await userEvent.type(searchInput, 'iron')

    await waitFor(() => {
      expect(mockFetchCharacters).toHaveBeenCalledWith('iron')
    })
  })

  it('reloads initial characters when search is cleared', async () => {
    const { fetchCharacters } = await import('./services/marvelApi')
    const mockFetchCharacters = vi.mocked(fetchCharacters)

    render(<App />)
    const searchInput = screen.getByPlaceholderText('Nome do personagem')

    await waitFor(() => {
      expect(screen.getByText('Spider-Man')).toBeInTheDocument()
    })

    mockFetchCharacters.mockClear()
    await userEvent.type(searchInput, 'iron')

    await waitFor(() => {
      expect(mockFetchCharacters).toHaveBeenCalledWith('iron')
    })

    mockFetchCharacters.mockClear()
    await userEvent.clear(searchInput)

    await waitFor(() => {
      expect(mockFetchCharacters).toHaveBeenCalledWith('')
    })
  })
})