import { IHotspot } from "./IHotspot";

export interface IHotspotInfoRequest {
    locId: string;
}

export type IHotspotInfoResponse = IHotspot;

export const HotspotInfoParams: Array<keyof IHotspotInfoRequest> =
  [];

export const HotspotInfoUrl = (request: IHotspotInfoRequest): string =>
  `ref/hotspot/info/${request.locId}`;
