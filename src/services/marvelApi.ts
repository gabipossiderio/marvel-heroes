import axios from 'axios'
import md5 from 'crypto-js/md5'

const PUBLIC_KEY = '838563787ac17ba0f001a941ccf0fbea'
const PRIVATE_KEY = '621bdddce683403ff5587c89cac1c191cfb16217'
const BASE_URL = 'https://gateway.marvel.com/v1/public'

interface MarvelCharacter {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: {
    available: number
    collectionURI: string
    items: Array<{
      resourceURI: string
      name: string
    }>
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: Array<{
      resourceURI: string
      name: string
    }>
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: Array<{
      resourceURI: string
      name: string
      type: string
    }>
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: Array<{
      resourceURI: string
      name: string
    }>
    returned: number
  }
  urls: Array<{
    type: string
    url: string
  }>
}

interface MarvelResponse {
  results: MarvelCharacter[];
  total: number;
}

export const fetchCharacters = async (nameStartsWith: string, offset: number = 0): Promise<MarvelResponse> => {
  const timestamp = new Date().getTime().toString()
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString()

  const params = {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
    limit: 10,
    offset: offset,
    ...(nameStartsWith && { nameStartsWith })
  }

  const response = await axios.get(`${BASE_URL}/characters`, { params })

  return {
    results: response.data.data.results,
    total: response.data.data.total
  }
}