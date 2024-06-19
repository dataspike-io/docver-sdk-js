import { Request, RequestMethodEnum } from '../request/request';
import { ResponseErrorModel, ResponseIdModel, ResponseModel } from '../request/types';
import { ApplicantModel, SearchApplicantRequest } from './models';
import { WithPaginationResponse } from '../../models';
import { CreateApplicantRequest } from './models/create-applicant-request';

export class ApplicantsApi extends Request {
  constructor(token: string, url?: string) {
    super(token, url);
  }
  getApplicantById = async (applicantId: string) => {
    const path = `/api/v3/applicants/${applicantId}`;
    const res = await this.getRequest(RequestMethodEnum.GET, path);
    return res as ResponseModel<ApplicantModel | ResponseErrorModel>;
  };
  getApplicants = async (params: SearchApplicantRequest) => {
    const searchParams = new URLSearchParams(params as any).toString();
    const path = `/api/v3/applicants?${searchParams}`;
    const res = await this.getRequest(RequestMethodEnum.GET, path, params);
    return res as ResponseModel<WithPaginationResponse<ApplicantModel>>;
  };
  createApplicant = async (applicant: CreateApplicantRequest) => {
    const path = `/api/v3/applicants`;
    const res = await this.getRequest(RequestMethodEnum.POST, path, applicant);
    return res as ResponseModel<ResponseIdModel>;
  };
}
