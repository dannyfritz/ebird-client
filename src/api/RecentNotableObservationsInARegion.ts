import { Detail } from "../constants/Detail";
import { IObservation } from "./IObservation";

export interface IRecentNotableObservationsInARegionRequest {
  regionCode: string;
  back?: number;
  maxResults?: number;
  detail?: Detail;
  hotspot?: boolean;
  r?: string;
}

export type IRecentNotableObservationsInARegionResponse = IObservation[];

export const RecentNotableObservationsInARegionParams: Array<keyof IRecentNotableObservationsInARegionRequest> =
  ["back", "maxResults", "detail", "hotspot", "r"];

export const RecentNotableObservationsInARegionUrl = (request: IRecentNotableObservationsInARegionRequest): string =>
  `/data/obs/${request.regionCode}/recent/notable`;
