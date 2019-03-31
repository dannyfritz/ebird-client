import { Category } from "../constants/Category";
import { IObservation } from "../interfaces/IObservation";

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
