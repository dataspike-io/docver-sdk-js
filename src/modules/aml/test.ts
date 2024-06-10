import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../enums/index.ts';
import { AmlSearchRequestModel } from './models/index.ts';
import { GenderEnum } from './enums/index.ts';
import { SearchDataSourcesRequest } from './models/search-data-sources-request.ts';
import { TDateISODate } from '../../models/date-iso.ts';

const searchAml = {
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

const amlRequestId  = '1ef14657-3041-619f-82ba-7ec0580e143e'

const searchDataSources = {
  name: '',
  tags: [TagEnum.SANCTIONS],
  risk_scores: [AmlRiskScoreEnum.HIGH],
  page: 0,
  limit: 20,
} as SearchDataSourcesRequest

export const amlTest ={
  searchAml,
  amlRequestId,
  searchDataSources
}