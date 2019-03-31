import { ITaxonomyVersion } from "./ITaxonomyVersion";

export interface ITaxonomyVersionsRequest {}

export type ITaxonomyVersionsResponse = ITaxonomyVersion[];

export const TaxonomyVersionsParams: Array<keyof ITaxonomyVersionsRequest> =
  [];

export const TaxonomyVersionsUrl = (_request: ITaxonomyVersionsRequest): string =>
  `/ref/taxonomy/versions`;
