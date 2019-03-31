import { Category } from "../constants/Category";
import { Format } from "../constants/Format";
import { ISpecies } from "./ISpecies";

export interface ITaxonomyRequest {
  cat?: Category[];
  locale?: string;
  fmt?: Format;
  version?: number;
  species?: string[];
}

export type ITaxonomyResponse = ISpecies[];

export const TaxonomyParams: Array<keyof ITaxonomyRequest> =
  ["cat", "locale", "fmt", "version", "species"];

export const TaxonomyUrl = (_request: ITaxonomyRequest): string =>
  `/ref/taxonomy/ebird`;
