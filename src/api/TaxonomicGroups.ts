import { ITaxonomicGroup } from "./ITaxonomicGroup";

export interface ITaxonomicGroupsRequest {
  speciesGrouping: "merlin" | "ebird";
  groupNameLocale?: string;
}

export type ITaxonomicGroupsResponse = ITaxonomicGroup[];

export const TaxonomicGroupsParams: Array<keyof ITaxonomicGroupsRequest> =
  [];

export const TaxonomicGroupsUrl = (request: ITaxonomicGroupsRequest): string =>
  `/ref/taxon/sppgroup/${request.speciesGrouping}`;
