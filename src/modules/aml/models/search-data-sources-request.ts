import { AmlRiskScoreEnum, TagEnum } from '../../../enums';

import { WithPaginationRequest } from '../../../models';
import { DataSourceModel } from './data-sources-model';

export type SearchDataSourcesRequest = WithPaginationRequest & {
  name?: string | DataSourceModel['source_id'];
  tags?: TagEnum[];
  risk_scores?: AmlRiskScoreEnum[];
};
