import { Artist } from "../models/Artist"
import { authenticatedRequest } from "./request"

// assume successful request 100% of the time

export const searchArtists = async (artistName: string): Promise<Artist[]> => {
  const res = await authenticatedRequest(`database/search?q=${artistName}&type=artist`)

  const artistData = await res.json()

  return artistData.results
}