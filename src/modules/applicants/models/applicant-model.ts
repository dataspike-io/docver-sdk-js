import {ApplicantInfoModel} from "./applicant-info-model.js";
import {AmlRiskScoreEnum, EntityTypeEnum, TagEnum} from "../../../enums/index.js";
import {ApplicantVerificationStatusEnum} from "../enums/index.js";
import {AmlSourcesModel} from "../../../models/index.js";

export type ApplicantModel = {
  applicant_id: string;
  external_id: string;
  type: EntityTypeEnum;
  provided_info?: ApplicantInfoModel;
  system_info?: ApplicantInfoModel;
  verification_status?: ApplicantVerificationStatusEnum;
  aml_screening_enabled: boolean;
  last_aml_screening_id?: string;
  last_verification_id?: string;
  last_verification_date?: string;
  last_screened_at: string;
  last_risk_score: AmlRiskScoreEnum;
  last_tags: TagEnum[];
  tg_profile: string;
  search_options: {
    risk_scores: AmlRiskScoreEnum[];
    tags: TagEnum[];
    sources: AmlSourcesModel[];
    fuzziness: boolean;
    phonetics: boolean;
    mode: number;
  };
};