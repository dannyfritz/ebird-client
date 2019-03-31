import { Category } from "../constants/Category";
import { Detail } from "../constants/Detail";
import { Rank } from "../constants/Rank";
import { IObservation } from "./IObservation";

export interface IHistoricObservationsOnADateRequest {
  regionCode: string;
  y: number;
  m: number;
  d: number;
  rank?: Rank;
  cat?: Category[];
  maxResults?: number;
  detail?: Detail;
  includeProvisional?: boolean;
  hotspot?: boolean;
  r?: string;
}

export type IHistoricObservationsOnADateResponse = IObservation[];

export const HistoricObservationsOnADateParams: Array<keyof IHistoricObservationsOnADateRequest> =
  ["rank", "cat", "maxResults", "detail", "includeProvisional", "hotspot", "r"];

export const HistoricObservationsOnADateUrl = (request: IHistoricObservationsOnADateRequest) =>
  `/data/obs/${request.regionCode}/historic/${request.y}/${request.m}/${request.d}`;
