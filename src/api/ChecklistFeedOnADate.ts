import { IChecklist } from "./IChecklist";

export interface IChecklistFeedOnADateRequest {
  regionCode: string;
  y: number;
  m: number;
  d: number;
  sortKey?: "obs_dt" | "creation_dt";
  maxResults?: number;
}

export type IChecklistFeedOnADateResponse = IChecklist[];

export const ChecklistFeedOnADateParams: Array<keyof IChecklistFeedOnADateRequest> =
  ["sortKey", "maxResults"];

export const ChecklistFeedOnADateUrl = (request: IChecklistFeedOnADateRequest): string =>
  `/product/lists/${request.regionCode}/${request.y}/${request.m}/${request.d}`;
