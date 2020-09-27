import { Release } from "../models/Release"
import { request } from "./request"

export const getArtistReleases = async (id: string, sort: string): Promise<Release[]> => {
  const res = await request(`artists/${id}/releases?sort=${sort}`)

  const releasesData = await res.json()

  return releasesData.releases
}