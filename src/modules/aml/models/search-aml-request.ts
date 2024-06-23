import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../../enums';
import { GenderEnum } from '../enums';
import { DataSourceModel } from './data-sources-model';
import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { TDateISODate } from '../../../models/date-iso';

type FuzzinessLevelType = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

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
