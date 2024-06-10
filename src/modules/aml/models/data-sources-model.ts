import { AmlRiskScoreEnum, TagEnum } from '../../../enums/index.ts';


export type DataSourceModel = {
  source_id: string;
  source_public_name: string;
  url: string;
  risk_score: AmlRiskScoreEnum;
  tags: TagEnum[];
  description: string;
};