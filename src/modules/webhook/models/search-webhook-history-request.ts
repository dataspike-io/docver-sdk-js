import { WithPaginationRequest } from '../../../models/index.ts';

export type SearchWebhookHistoryRequest = WithPaginationRequest &{
  webhook_id?: string;
  after?: string
}



