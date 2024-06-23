import { AmlRiskScoreEnum, TagEnum } from '../../../enums';
import { ApplicantInfoModel } from './applicant-info-model';
import { DataSourceModel } from '../../aml/models';

export type UpdateApplicantRequest = ApplicantInfoModel & {
  email?: string;
  phone?: string;
  search_options?: {
    risk_scores: AmlRiskScoreEnum[];
    tags: TagEnum[];
    sources: string | DataSourceModel['source_id'];
    phonetics: boolean;
    fuzziness: boolean;
    mode: 0;
  };
};
