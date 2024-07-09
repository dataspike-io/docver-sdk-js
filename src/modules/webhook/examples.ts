import { WebhooksTypeEnum } from './enums';

const webhookExample = {
  is_sandbox: false,
  webhook_url: 'https://test.io',
  event_types: [WebhooksTypeEnum.AML_SCREENING],
  enabled: true,
};


const searchWebhookHistoryExample = {
  page: 1,
  limit: 10,
  webhook_id: '1ee48031-c02c-6820-86d0-0ddf357df8b0',
};

export const webhookExamples = {
  webhookExample,
  searchWebhookHistoryExample,
};
