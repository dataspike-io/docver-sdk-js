import { SearchWebhookHistoryRequest, WebhookHistoryModel, WebhookModel, WebhookModelDefault } from './models';
import { WithPaginationResponse } from '../../models';
import { convertToSearchParams } from '../utilts';
import { BaseAPi } from '../base-api/base-api';
import { RequestMethodEnum } from '../base-api';

export class WebhookApi extends BaseAPi {
  #webhooksPath = '/api/v3/organization/webhooks';
  #webhooksHistoryPath = '/api/v3/notifications/webhook/history';

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getWebhook = async () => {
    return await this.getRequest<{
      webhooks: WebhookModel[];
    }>({ query: `${this.#webhooksPath}` });
  };
  createWebhook = async (webhook: WebhookModelDefault) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      query: `${this.#webhooksPath}`,
      data: webhook,
    });
  };
  updateWebhook = async (webhookId: string, webhook: WebhookModelDefault) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.PUT,
      query: `${this.#webhooksPath}/${webhookId}`,
      data: webhook,
    });
  };
  deleteWebhook = async (webhookId: string) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.DELETE,
      query: `${this.#webhooksPath}/${webhookId}`,
    });
  };
  getWebhookHistory = async (params: SearchWebhookHistoryRequest) => {
    return await this.getRequest<WithPaginationResponse<WebhookHistoryModel>>({
      query: `${this.#webhooksHistoryPath}?${convertToSearchParams(params)}`,
    });
  };
}
