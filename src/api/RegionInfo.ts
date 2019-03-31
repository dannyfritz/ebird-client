import { RegionNameFormat } from "../constants/RegionNameFormat";
import { IRegionInfo } from "./IRegionInfo";

export interface IRegionInfoRequest {
  regionCode: string;
  regionNameFormat?: RegionNameFormat;
  delim?: string;
}

export type IRegionInfoResponse = IRegionInfo;

export const RegionInfoParams: Array<keyof IRegionInfoRequest> =
  ["regionNameFormat", "delim"];

export const RegionInfoUrl = (request: IRegionInfoRequest): string =>
  `/ref/region/info/${request.regionCode}`;
