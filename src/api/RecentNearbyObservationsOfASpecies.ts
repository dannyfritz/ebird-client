import { Category } from "../constants/Category";
import { IObservation } from "./IObservation";

export interface IRecentNearbyObservationsOfASpeciesRequest {
  speciesCode: string;
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  cat?: Category[];
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
  sppLocale?: string;
}

export type IRecentNearbyObservationsOfASpeciesResponse = IObservation[];

export const RecentNearbyObservationsOfASpeciesParams: Array<keyof IRecentNearbyObservationsOfASpeciesRequest> =
  ["lat", "lng", "dist", "back", "maxResults", "includeProvisional", "hotspot", "sppLocale"];

export const RecentNearbyObservationsOfASpeciesUrl = (request: IRecentNearbyObservationsOfASpeciesRequest): string =>
  `/data/obs/geo/recent/${request.speciesCode}`;
