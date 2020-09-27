/**
 * Simplified model representing an artist; could process python_case to camelCase
 */

export type Artist = {
  id: number;
  country: string;
  cover_image: string;
  resource_url: string;
  title: string;
  thumb: string;
  type: string;
}
