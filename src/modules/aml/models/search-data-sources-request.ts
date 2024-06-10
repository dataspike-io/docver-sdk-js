import { AmlRiskScoreEnum, TagEnum } from '../../../enums/index.ts';

import { WithPaginationRequest } from '../../../models/index.ts';
import { DataSourceModel } from './data-sources-model.ts';

export type SearchDataSourcesRequest = WithPaginationRequest & {
  name?: string | DataSourceModel['source_id'];
  tags?: TagEnum[];
  risk_scores?: AmlRiskScoreEnum[];
};