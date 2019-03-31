import { Category } from "../constants/Category";
import { IObservation } from "../interfaces/IObservation";

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
