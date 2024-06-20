import { WithPaginationRequest } from '../../../models';

export type SearchWebhookHistoryRequest = WithPaginationRequest & {
  webhook_id?: string;
  after?: string;
};
