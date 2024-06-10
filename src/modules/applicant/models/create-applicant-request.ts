import { ApplicantInfoModel, ApplicantMainInfo, ApplicantSearchOptions } from './applicant-info-model.ts';

export type CreateApplicantRequest = ApplicantMainInfo &{
  info?: ApplicantInfoModel;
  search_options? : ApplicantSearchOptions
};


