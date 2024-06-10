import { AmlRiskScoreEnum, TagEnum } from '../../../enums/index.js';
import { ApplicantInfoModel, ApplicantMainInfo } from './applicant-info-model.js';
import { DataSourceModel } from '../../aml/models/index.js';


export type UpdateApplicantRequest = ApplicantInfoModel &{
  email?: string;
  phone?: string;
  search_options? : {
    risk_scores: AmlRiskScoreEnum[],
    tags: TagEnum[],
    sources: string | DataSourceModel['source_id'],
    phonetics: boolean,
    fuzziness: boolean,
    "mode": 0
  }
};


