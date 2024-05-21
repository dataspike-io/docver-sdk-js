import {AmlRiskScoreEnum, EntityTypeEnum, TagEnum} from "../../../enums/index.js";
import {GenderEnum, TagFilterMatchEnum, TagMatchLevelEnum} from "../enums/index.js";
import {AmlSourcesModel} from "../../../models/index.js";

export type AmlReportModel = {
  uuid: string;
  type: EntityTypeEnum;
  tags: TagEnum[];
  updated_at?: number;
  annotation?: string;
  risk_score: AmlRiskScoreEnum;
  fields: {
    names: NameModel[];
    sources?: AmlSourcesModel[];
    media?: MediaModel[];
    images?: GenericDataModel[];
    contact_info?: ContactInfoModel[];
    registration_ids?: RegistrationIdModel[];
    addresses?: LocationDataModel[];
    genders?: GenderEnum[];
    dates_of_birth?: DateModel[];
    places_of_birth?: LocationDataModel[];
    dates_of_death?: DateModel[];
    places_of_death?: LocationDataModel[];
    citizenships?: string[];
    nationalities?: string[];
    political_roles?: PoliticalRoleModel[];
    occupations?: OccupationModel[];
    companies_and_enterprises?: EntityInfoModel[];
    owners_and_beneficiaries?: EntityInfoModel[];
    associates?: AssociatesModel[];
  };
  search_metadata: {
    best_match_name: string;
    name_match_percentage: number;
    name_match_level: TagMatchLevelEnum;
    date_of_birth_matched: TagFilterMatchEnum;
    country_matched: TagFilterMatchEnum;
    general_match_level: TagMatchLevelEnum;
    gender_matched: TagFilterMatchEnum;
  };
};

export type LocationDataModel = {
  country?: string;
  region?: string;
  city?: string;
  postal_code?: string;
  address?: string;
};
export type GenericDataModel = { description: string; url?: string };
export type ContactInfoModel = {
  emails: string[];
  phones: string[];
  websites: string[];
};
export type DateModel = { gte?: string; lte?: string };
export type NameModel = {
  full_name: string;
  first_name?: string;
  last_name?: string;
  lang?: string;
};

export type MediaModel = {
  source_name: string;
  source_url?: string;
  headline?: string;
  summary?: string;
  published_at?: string;
  risk_score?: AmlRiskScoreEnum;
};
export type RegistrationIdModel = {
  id: string;
  id_type?: string;
  date?: string;
  industry?: string;
  country?: string;
};

export type PoliticalRoleModel = { role: string; country?: string };
export type OccupationModel = { occupation: string; country?: string };
export type EntityInfoModel = {
  name?: string;
  reference?: string;
  role?: string;
  country?: string;
  start_date?: DateModel;
  end_date?: DateModel;
  ownership_value?: string;
  currency?: string;
  ownership_percentage?: string;
  additional_source?: AmlSourcesModel;
};

export type AssociatesModel = {
  uuid?: string;
  name?: string;
  start_date?: DateModel;
  end_date?: DateModel;
  relationship?: string;
  is_relative?: boolean;
};