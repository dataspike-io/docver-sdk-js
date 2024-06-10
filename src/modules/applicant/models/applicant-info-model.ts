import { ApplicantGenderEnum } from '../enums/index.ts';
import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { TDateISODate } from '../../../models/date-iso.ts';
import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../../enums/index.ts';
import { DataSourceModel } from '../../aml/index.ts';


export type ApplicantMainInfo = {
  external_id?: string;
  email?: string;
  phone?: string;
  aml_screening_enabled?: boolean;
  applicant_type: EntityTypeEnum;
}

export type ApplicantInfoModel = Partial<{
  custom_fields?: {
    [key: string]: string;
  };
  full_name?: string;
  first_name?: string;
  last_name?: string;
  dob?: TDateISODate;
  gender?: ApplicantGenderEnum;
  citizenship?: Iso3166Alpha2Code;
  country?: Iso3166Alpha2Code;
  address?: string;
  registration_id?: string;
  phone?: string;
  addresses?: {
    residence?: {
      country?: Iso3166Alpha2Code;
      city?: string;
      postal_code?: string;
      street?: string;
    };
  };
}>;

export type ApplicantSearchOptions = {
  risk_scores: AmlRiskScoreEnum[],
  tags: TagEnum[],
  sources: string[] | DataSourceModel['source_id'][],
  phonetics: boolean,
  fuzziness: boolean,
  "mode": 0
}

