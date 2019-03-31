import { Format } from "../constants/Format";
import { IHotspot } from "./IHotspot";

export interface INearbyHotspotsRequest {
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  fmt?: Format;
}

export type INearbyHotspotsResponse = IHotspot[];

export const NearbyHotspotsParams: Array<keyof INearbyHotspotsRequest> =
  ["lat", "lng", "dist", "back", "fmt"];

export const NearbyHotspotsUrl = (_request: INearbyHotspotsRequest) =>
  `/ref/hotspot/geo`;
