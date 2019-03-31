import { Category } from "../constants/Category";
import { Sort } from "../constants/Sort";
import { IObservation } from "../interfaces/IObservation";

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
