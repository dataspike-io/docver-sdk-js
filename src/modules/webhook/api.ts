import { BaseAPi, RequestMethodEnum } from '../base-api/index.ts';
import { SearchWebhookHistoryRequest, WebhookHistoryModel, WebhookModel, WebhookModelDefault } from './models/index.ts';
import { WithPaginationResponse } from '../../models/index.ts';

export class WebhookApi extends BaseAPi {
  #webhooksPath = '/api/v3/organization/webhooks';
  #webhooksHistoryPath = '/api/v3/notifications/webhook/history';

  constructor(token: string) {
    super(token);
  }

  getWebhook = async () => {
    return await this.getRequest<{
      webhooks: WebhookModel[]
    }>(RequestMethodEnum.GET, `${this.#webhooksPath}`);
  };
  createWebhook = async (webhook: WebhookModelDefault) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#webhooksPath}`, webhook);
  };
  updateWebhook = async (webhookId: string, webhook: WebhookModelDefault) => {
    return await this.getRequest<string>(RequestMethodEnum.PUT, `${this.#webhooksPath}/${webhookId}`, webhook);
  };
  deleteWebhook = async (webhookId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.DELETE, `${this.#webhooksPath}/${webhookId}`);
  };
  getWebhookHistory = async (params: SearchWebhookHistoryRequest) => {
    const searchParams = new URLSearchParams(params as any).toString();
    return await this.getRequest<WithPaginationResponse<WebhookHistoryModel>>(RequestMethodEnum.GET, `${this.#webhooksHistoryPath}?${searchParams}`);
  };
}