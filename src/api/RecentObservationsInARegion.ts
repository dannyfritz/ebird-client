import { Category } from "../constants/Category";
import { IObservation } from "./IObservation";

export interface IRecentObservationsInARegionRequest {
  regionCode: string;
  back?: number;
  cat?: Category[];
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
  r?: string;
}

export type IRecentObservationsInARegionResponse = IObservation[];

export const RecentObservationsInARegionParams: Array<keyof IRecentObservationsInARegionRequest> =
  ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"];

export const RecentObservationsInARegionUrl = (request: IRecentObservationsInARegionRequest) =>
  `/data/obs/${request.regionCode}/recent`;
