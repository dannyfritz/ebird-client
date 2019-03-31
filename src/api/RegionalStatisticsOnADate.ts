import { IRegionalStatistic } from "./IRegionalStatistic";

export interface IRegionalStatisticsOnADateRequest {
  regionCode: string;
  y: number;
  m: number;
  d: number;
}

export type IRegionalStatisticsOnADateResponse = IRegionalStatistic;

export const RegionalStatisticsOnADateParams: Array<keyof IRegionalStatisticsOnADateRequest> =
  [];

export const RegionalStatisticsOnADateUrl = (request: IRegionalStatisticsOnADateRequest): string =>
  `/product/stats/${request.regionCode}/${request.y}/${request.m}/${request.d}`;
