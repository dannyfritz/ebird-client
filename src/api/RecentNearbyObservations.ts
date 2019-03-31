import { Category } from "../constants/Category";
import { Sort } from "../constants/Sort";
import { IObservation } from "./IObservation";

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

export const RecentNearbyObservationsParams: Array<keyof IRecentNearbyObservationsRequest> =
  ["lat", "lng", "dist", "back", "cat", "maxResults", "includeProvisional", "hotspot", "sort", "sppLocale"];

export const RecentNearbyObservationsUrl = (request: IRecentNearbyObservationsRequest) =>
  `/ref/obs/geo/recent`;
