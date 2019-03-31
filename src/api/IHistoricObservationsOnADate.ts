import { Category } from "../constants/Category";
import { Sort } from "../constants/Sort";
import { IObservation } from "../interfaces/IObservation";

export interface IHistoricObservationsOnADateRequest {
  regionCode: string;
  y: number;
  m: number;
  d: number;
  rank?: Range;
  cat?: Category[];
  maxResults?: number
  detail?: Detail;
  includeProvisional?: boolean;
  hotspot?: boolean;
  r?: string;
}

export type IHistoricObservationsOnADateResponse = IObservation[];
