import { WebhooksTypeEnum } from '../enums/index.ts';
import { AmlRiskScoreEnum } from '../../../enums/index.ts';
import { AmlHistoryModel, AmlSearchRequestModel } from '../../aml/index.ts';
import { VerificationResultModel } from '../../verification/index.ts';

export type WebhookHistoryModel = {
  id: string,
  webhook_id: string,
  is_sandbox: string,
  event_type: WebhooksTypeEnum,
  attempts: number,
  response_code: number,
  timestamp: string,
  last_attempt_at: string
  payload: AmlWebhookModel | VerificationResultModel | unknown
}

export type AmlWebhookModel = {
  risk_score: {
    type: AmlRiskScoreEnum
  },
  applicant_id: string,
  external_id: string
  screening_id: string,
  search_request: AmlSearchRequestModel,
  search_response: AmlHistoryModel,
  completed_at: string
}
