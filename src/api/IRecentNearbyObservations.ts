import { Category } from "../constants/Category";
import { Sort } from "../constants/Sort";
import { IObservation } from "../interfaces/IObservation";

export interface IRecentNearbyObservationsRequest {
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  cat?: Category[];
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
  sort?: Sort;
  sppLocale?: string;
}

export type IRecentNearbyObservationsResponse = IObservation[];
