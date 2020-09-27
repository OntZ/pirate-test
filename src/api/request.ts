import { AUTH_QUERY } from "./auth"

export const request = (path: string, params?: RequestInit) => fetch(`https://cors-anywhere.herokuapp.com/https://api.discogs.com/${path}`, params)

export const authenticatedRequest = (path: string, params?: RequestInit) => request(`${path}${AUTH_QUERY}`, params)