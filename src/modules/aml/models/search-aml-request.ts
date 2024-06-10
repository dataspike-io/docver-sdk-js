import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../../enums/index.ts';
import { GenderEnum } from '../enums/index.ts';
import { DataSourceModel } from './data-sources-model.ts';
import {  Iso3166Alpha2Code } from "iso-3166-ts";
import { TDateISODate } from '../../../models/date-iso.ts';


// not working: fix TODO
const data = (new Array(11).fill(1).map((a, i) =>  i / 10)) as any
type FuzzinessLevelType = keyof typeof data;


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

