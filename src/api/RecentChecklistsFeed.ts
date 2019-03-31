import { IChecklist } from "./IChecklist";

export interface IRecentChecklistsFeedRequest {
  regionCode: string;
  maxResults?: number;
}

export type IRecentChecklistsFeedResponse = IChecklist[];

export const RecentChecklistsFeedParams: Array<keyof IRecentChecklistsFeedRequest> =
  ["maxResults"];

export const RecentChecklistsFeedUrl = (request: IRecentChecklistsFeedRequest): string =>
  `/product/lists/${request.regionCode}`;
