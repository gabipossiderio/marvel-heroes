import axios from 'axios'
import md5 from 'crypto-js/md5'

const PUBLIC_KEY = '838563787ac17ba0f001a941ccf0fbea'
const PRIVATE_KEY = '621bdddce683403ff5587c89cac1c191cfb16217'
const BASE_URL = 'https://gateway.marvel.com/v1/public'

interface MarvelCharacter {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
  series: {
    items: Array<{ name: string }>
  }
  events: {
    items: Array<{ name: string }>
  }
}

export const fetchCharacters = async (nameStartsWith: string): Promise<MarvelCharacter[]> => {
  const timestamp = new Date().getTime().toString()
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString()

  const params = {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
    limit: 10,
    ...(nameStartsWith && { nameStartsWith })
  }

  const response = await axios.get(`${BASE_URL}/characters`, { params })

  return response.data.data.results
}