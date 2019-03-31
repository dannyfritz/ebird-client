import { IRegion } from "./IRegion";

export interface IAdjacentRegionsRequest {
  regionCode: string;
}

export type IAdjacentRegionsResponse = IRegion[];

export const AdjacentRegionsParams: Array<keyof IAdjacentRegionsRequest> =
  [];

export const AdjacentRegionsUrl = (request: IAdjacentRegionsRequest): string =>
  `/ref/adjacent/${request.regionCode}`;
