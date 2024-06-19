import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../enums/index.ts';
import { AmlSearchRequestModel } from './models/index.ts';
import { GenderEnum } from './enums/index.ts';
import { SearchDataSourcesRequest } from './models/search-data-sources-request.ts';
import { TDateISODate } from '../../models/date-iso.ts';

const amlSearchExample = {
  'full_name': 'John Doe',
  'countries': ['CN'] as Iso3166Alpha2Code[],
  'entity_types': [EntityTypeEnum.PERSON],
  'tags': [TagEnum.PEP, TagEnum.SANCTIONS],
  date_of_birth: {
    gte: '1937-07-30' as TDateISODate,
    lte: '1937-07-30' as TDateISODate,
  },
  gender: GenderEnum.MALE,
  'fuzziness_level': 0.2,
  'phonetics': true,
} as AmlSearchRequestModel;


const amlSearchDataSources = {
  name: '',
  tags: [TagEnum.SANCTIONS],
  risk_scores: [AmlRiskScoreEnum.HIGH],
  page: 0,
  limit: 20,
} as SearchDataSourcesRequest;

export const amlExampleRequests = {
  amlSearchExample,
  amlSearchDataSources,
};