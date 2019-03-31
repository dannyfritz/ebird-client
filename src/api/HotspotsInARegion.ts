import { Format } from "../constants/Format";
import { IHotspot } from "./IHotspot";

export interface IHotspotsInARegionRequest {
  regionCode: string;
  back?: number;
  fmt?: Format;
}

export type IHotspotsInARegionResponse = IHotspot[];

export const HotspotsInARegionParams: Array<keyof IHotspotsInARegionRequest> =
  ["back", "fmt"];

export const HotspotsInARegionUrl = (request: IHotspotsInARegionRequest): string =>
  `/ref/hotspot/${request.regionCode}`;
