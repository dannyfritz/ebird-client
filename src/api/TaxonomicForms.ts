export interface ITaxonomicFormsRequest {
  speciesCode: string;
}

export type ITaxonomicFormsResponse = string[];

export const TaxonomicFormsParams: Array<keyof ITaxonomicFormsRequest> =
  [];

export const TaxonomicFormsUrl = (request: ITaxonomicFormsRequest): string =>
  `/ref/taxon/forms/${request.speciesCode}`;
