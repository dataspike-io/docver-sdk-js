import { BaseAPi, RequestMethodEnum } from '../base-api/index.ts';
import { SearchWebhookHistoryRequest, WebhookHistoryModel, WebhookModel, WebhookModelDefault } from './models/index.ts';
import { WithPaginationResponse } from '../../models/index.ts';
import { convertToSearchParams } from '../utilts.ts';

export class WebhookApi extends BaseAPi {
  #webhooksPath = '/api/v3/organization/webhooks';
  #webhooksHistoryPath = '/api/v3/notifications/webhook/history';

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getWebhook = async () => {
    return await this.getRequest<{
      webhooks: WebhookModel[]
    }>({ paramsQuery: `${this.#webhooksPath}` });
  };
  createWebhook = async (webhook: WebhookModelDefault) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#webhooksPath}`,
      data: webhook,
    });
  };
  updateWebhook = async (webhookId: string, webhook: WebhookModelDefault) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.PUT,
      paramsQuery: `${this.#webhooksPath}/${webhookId}`,
      data: webhook,
    });
  };
  deleteWebhook = async (webhookId: string) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.DELETE,
      paramsQuery: `${this.#webhooksPath}/${webhookId}`,
    });
  };
  getWebhookHistory = async (params: SearchWebhookHistoryRequest) => {
    return await this.getRequest<WithPaginationResponse<WebhookHistoryModel>>({ paramsQuery: `${this.#webhooksHistoryPath}?${convertToSearchParams(params)}` });
  };
}