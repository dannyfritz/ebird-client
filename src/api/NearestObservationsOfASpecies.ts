import { IObservation } from "./IObservation";

export interface INearestObservationsOfASpeciesRequest {
  speciesCode: string;
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
}

export type INearestObservationOfASpeciesResponse = IObservation[];

export const NearestObservationsOfASpeciesParams: Array<keyof INearestObservationsOfASpeciesRequest> =
  ["lat", "lng", "dist", "back", "maxResults", "includeProvisional", "hotspot"];

export const NearestObservationsOfASpeciesUrl = (request: INearestObservationsOfASpeciesRequest) =>
  `/data/nearest/geo/recent/${request.speciesCode}`;
