import { IObservation } from "../interfaces/IObservation";

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
