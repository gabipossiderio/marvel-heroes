import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { fetchCharacters } from './marvelApi'

vi.mock('axios')
const mockedAxios = vi.mocked(axios, true)

describe('marvelApi', () => {
  it('fetches characters from Marvel API', async () => {
    const mockResponse = {
      data: {
        data: {
          results: [
            {
              id: 1,
              name: 'Spider-Man',
              thumbnail: { path: 'image', extension: 'jpg' },
              series: { items: [] },
              events: { items: [] }
            }
          ],
          total: 1563
        }
      }
    }

    mockedAxios.get.mockResolvedValue(mockResponse)
    const result = await fetchCharacters('')

    expect(result).toEqual({
      results: [
        {
          id: 1,
          name: 'Spider-Man',
          thumbnail: { path: 'image', extension: 'jpg' },
          series: { items: [] },
          events: { items: [] }
        }
      ],
      total: 1563
    })
  })
})