import { Detail } from "../constants/Detail";
import { IObservation } from "../interfaces/IObservation";

export interface IRecentNotableObservationsInARegionRequest {
  regionCode: string;
  back?: number;
  maxResults?: number;
  detail?: Detail;
  hotspot?: boolean;
  r?: string;
}

export type IRecentNotableObservationsInARegionResponse = IObservation[];
