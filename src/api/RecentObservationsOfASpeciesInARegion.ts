import { Category } from "../constants/Category";
import { IObservation } from "./IObservation";

export interface IRecentObservationsOfASpeciesInARegionRequest {
  regionCode: string;
  speciesCode: string;
  back?: number;
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
  r?: string;
}

export type IRecentObservationsOfASpeciesInARegionResponse = IObservation[];

export const RecentObservationsOfASpeciesInARegionParams: Array<keyof IRecentObservationsOfASpeciesInARegionRequest> =
  ["back", "maxResults", "includeProvisional", "hotspot", "r"];

export const RecentObservationsOfASpeciesInARegionUrl = (request: IRecentObservationsOfASpeciesInARegionRequest) =>
  `/data/obs/${request.regionCode}/recent/${request.speciesCode}`;
