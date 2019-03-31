import { Format } from "../constants/Format";
import { RegionType } from "../constants/RegionType";
import { IRegion } from "./IRegion";

export interface ISubRegionListRequest {
  regionType: RegionType;
  parentRegionCode: string;
  fmt: Format;
}

export type ISubRegionListResponse = IRegion[];

export const SubRegionListParams: Array<keyof ISubRegionListRequest> =
  [];

export const SubRegionListUrl = (request: ISubRegionListRequest): string =>
  `/ref/region/list/${request.regionType}/${request.parentRegionCode}.${request.fmt}}`;
