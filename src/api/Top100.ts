import { ISpecies } from "./ISpecies";

export interface ITop100Request {
  regionCode: string;
  y: number;
  m: number;
  d: number;
  checklistSort?: boolean;
  maxResults?: number;
}

export type ITop100Response = ISpecies[];

export const Top100Params: Array<keyof ITop100Request> =
  ["checklistSort", "maxResults"];

export const Top100Url = (request: ITop100Request): string =>
  `/product/top100/${request.regionCode}/${request.y}/${request.m}/${request.d}`;
