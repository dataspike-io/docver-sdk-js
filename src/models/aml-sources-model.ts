import { AmlRiskScoreEnum, TagEnum } from '../enums';

export type AmlSourcesModel = {
  source_id: string;
  name: string;
  reason?: string;
  summary?: string;
  source_url?: string;
  risk_score?: AmlRiskScoreEnum;
  tags?: TagEnum[];
};
