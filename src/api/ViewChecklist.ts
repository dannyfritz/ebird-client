import { IChecklistDetail } from "./IChecklistDetail";

export interface IViewChecklistRequest {
  subId: string;
}

export type IViewChecklistResponse = IChecklistDetail;

export const ViewChecklistParams: Array<keyof IViewChecklistRequest> =
  [];

export const ViewChecklistUrl = (request: IViewChecklistRequest): string =>
  `/product/checklist/view/${request.subId}`;
