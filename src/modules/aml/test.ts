import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../enums/index.js';
import { AmlSearchRequestModel, DataSourceModel, TDateISODate } from './models/index.js';
import { GenderEnum } from './enums/index.js';
import { DataSourcesSearchRequest } from './models/data-sources-search-request.js';

export  const searchAml = {
  "full_name": "putin",
  "countries": ['RU', 'AG'] as Iso3166Alpha2Code[],
  "entity_types": [EntityTypeEnum.PERSON],
  "tags": [TagEnum.PEP, TagEnum.SANCTIONS],
  date_of_birth: {
    gte: '1955-01-08' as TDateISODate,
    lte: '2021-01-08' as TDateISODate
  },
  gender: GenderEnum.FEMALE,
  "fuzziness_level": 0.2,
  "fuzziness": true,
  "phonetics": true,
} as AmlSearchRequestModel

export const amlRequestId  = '1ef14657-3041-619f-82ba-7ec0580e143e'

export const searchDataSources = {
  name: '',
  tags: [TagEnum.SANCTIONS],
  risk_scores: [AmlRiskScoreEnum.HIGH],
  page: 0,
  limit: 20,
} as DataSourcesSearchRequest