import { IObservation } from "./IObservation";

export interface IRecentNearbyNotableObservationsRequest {
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  maxResults?: number;
  detail?: boolean;
  hotspot?: boolean;
}

export type IRecentNearbyNotableObservationsResponse = IObservation[];

export const RecentNearbyNotableObservationsParams: Array<keyof IRecentNearbyNotableObservationsRequest> =
  ["lat", "lng", "dist", "back", "maxResults", "detail", "hotspot"];

export const RecentNearbyNotableObservationsUrl = (_request: IRecentNearbyNotableObservationsRequest) =>
  `/ref/obs/geo/recent/notable`;
