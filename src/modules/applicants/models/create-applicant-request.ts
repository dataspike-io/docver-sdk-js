import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../../enums/index.js';
import { ApplicantInfoModel } from './applicant-info-model.js';
import { DataSourceModel } from '../../aml/models/index.js';


export type CreateApplicantRequest ={
  external_id?: string;
  email?: string;
  phone?: string;
  aml_screening_enabled?: boolean;
  applicant_type: EntityTypeEnum;
  info?: ApplicantInfoModel;
  search_options? : {
    risk_scores: AmlRiskScoreEnum[],
    tags: TagEnum[],
    sources: string | DataSourceModel['source_id'],
    phonetics: boolean,
    fuzziness: boolean,
    "mode": 0
  }
};


