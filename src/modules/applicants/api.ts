import {Request, RequestMethodEnum} from "../request/request.js";
import { ResponseErrorModel, ResponseIdModel, ResponseModel } from '../request/types.js';
import { ApplicantModel, SearchApplicantRequest } from './models/index.js';
import { WithPaginationResponse } from '../../models/index.js';
import { DataSourceModel } from '../aml/models/index.js';
import { CreateApplicantRequest } from './models/create-applicant-request.js';

export class ApplicantsApi extends Request {
  constructor(token: string,url?: string, ) {
    super(token, url);
  }
  getApplicantById = async (applicantId: string) =>{
    const path = `/api/v3/applicants/${applicantId}`
    const res = await this.getRequest(RequestMethodEnum.GET,path)
    return res as  ResponseModel<ApplicantModel | ResponseErrorModel>
  }
  getApplicants = async (params: SearchApplicantRequest) =>{
    const path = `/api/v3/applicants`
    const res = await this.getRequest(RequestMethodEnum.GET,path)
    return res as  ResponseModel<WithPaginationResponse<ApplicantModel>>
  }
  createApplicant = async (applicant: CreateApplicantRequest) => {
    const path = `/api/v3/applicants`
    const res = await this.getRequest(RequestMethodEnum.POST, path, applicant)
    return res as ResponseModel<ResponseIdModel>
  }
}