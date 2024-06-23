import { WebhooksTypeEnum } from '../enums';
import { AmlRiskScoreEnum } from '../../../enums';
import { AmlHistoryModel, AmlSearchRequestModel } from '../../aml';
import { VerificationResultModel } from '../../verification';

export type WebhookHistoryModel = {
  id: string;
  webhook_id: string;
  is_sandbox: string;
  event_type: WebhooksTypeEnum;
  attempts: number;
  response_code: number;
  timestamp: string;
  last_attempt_at: string;
  payload: AmlWebhookModel | VerificationResultModel | unknown;
};

export type AmlWebhookModel = {
  risk_score: {
    type: AmlRiskScoreEnum;
  };
  applicant_id: string;
  external_id: string;
  screening_id: string;
  search_request: AmlSearchRequestModel;
  search_response: AmlHistoryModel;
  completed_at: string;
};
