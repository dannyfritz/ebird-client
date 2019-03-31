import { Category } from "../constants/Category";
import { Format } from "../constants/Format";
import { ISpecies } from "../interfaces/ISpecies";

export interface ITaxonomyRequest {
  cat?: Category[];
  species?: string[];
  locale?: string;
  fmt?: Format;
  version?: number;
}

export type ITaxonomyResponse = ISpecies[];
