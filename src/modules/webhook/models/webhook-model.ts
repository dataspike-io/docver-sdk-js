import { WebhooksTypeEnum } from '../enums/index.ts';

export type WebhookModel =  WebhookModelDefault & {
  webhook_id: string;
};

export type WebhookModelDefault = {
  is_sandbox: boolean;
  webhook_url: string;
  event_types: WebhooksTypeEnum[];
  enabled: boolean;
}