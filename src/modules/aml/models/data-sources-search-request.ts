import { AmlRiskScoreEnum, TagEnum } from '../../../enums/index.js';

import { WithPaginationRequest } from '../../../models/index.js';
import { DataSourceModel } from './data-sources-model.js';

export type DataSourcesSearchRequest = WithPaginationRequest & {
  name?: string | DataSourceModel['source_id'];
  tags?: TagEnum[];
  risk_scores?: AmlRiskScoreEnum[];
};