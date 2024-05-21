import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../../enums/index.js';
import { GenderEnum } from '../enums/index.js';
import { DataSourceModel } from './data-sources-model.js';
import {  Iso3166Alpha2Code } from "iso-3166-ts";
import { TDateISODate } from '../../../models/date-iso.js';


// not working: fix TODO
const data = (new Array(11).fill(1).map((a, i) =>  i / 10)) as const
type FuzzinessLevelType = typeof data[number];


export type AmlSearchRequestModel = {
  full_name: string;
  first_name?: string;
  last_name?: string;
  countries?: Iso3166Alpha2Code[];
  cities?: string[];
  entity_types?: EntityTypeEnum[];
  postal_codes?: string[];
  date_of_birth?: {
    gte: TDateISODate;
    lte: TDateISODate;
  };
  tags?: TagEnum[];
  sources?: DataSourceModel['source_id'] | string;
  risk_scores?: AmlRiskScoreEnum[];
  gender?: GenderEnum;
  fuzziness_level?: FuzzinessLevelType;
  fuzziness?: boolean;
  phonetics?: boolean;
  registration_ids?: string[];
};

