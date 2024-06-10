import { WebhooksTypeEnum } from './enums/index.ts';
import { WebhookModelDefault } from './models/index.ts';

const webhook = {
  "is_sandbox": false,
  "webhook_url": "https://test.io",
  "event_types": [
    WebhooksTypeEnum.AML_SCREENING
  ],
  "enabled": true
}


const updateWebhook =  {
  "is_sandbox": false,
  "webhook_url": "https://api.dataspike.dev/webapi/blackhole",
  "event_types": [
    "DOCVER"
  ],
  "enabled": true
} as  WebhookModelDefault

const searchWebhookHistory = {
  page: 1,
  limit: 10,
  webhook_id: '1ee48031-c02c-6820-86d0-0ddf357df8b0'
}

export const webhookTest = {
  webhook,
  updateWebhook,
  searchWebhookHistory
}