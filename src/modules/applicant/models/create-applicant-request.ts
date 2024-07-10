import { ApplicantInfoModel, ApplicantMainInfo, ApplicantSearchOptions } from './applicant-info-model';

export type CreateApplicantRequest = ApplicantMainInfo & {
  info?: ApplicantInfoModel;
  search_options?: ApplicantSearchOptions;
};
