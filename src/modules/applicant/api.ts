import { BaseAPi, RequestMethodEnum } from '../base-api/base-api.ts';
import { ResponseIdModel } from '../base-api/types.ts';
import {
  ApplicantModel,
  ApplicantSearchOptions,
  ApplicantTelegramRequest,
  ChangeApplicantAmlScreeningRequest,
  SearchApplicantRequest,
  UpdateApplicantRequest,
} from './models/index.ts';
import { WithPaginationResponse } from '../../models/index.ts';
import { CreateApplicantRequest } from './models/create-applicant-request.ts';


export class ApplicantApi extends BaseAPi {
  #applicantsPath = `/api/v3/applicants`;

  constructor(token: string) {
    super(token);
  }

  getApplicantById = async (applicantId: string) => {
    return await this.getRequest<ApplicantModel>(RequestMethodEnum.GET, `${this.#applicantsPath}/${applicantId}`);
  };
  getApplicants = async (params: SearchApplicantRequest) => {
    const searchParams = new URLSearchParams(params as any).toString();
    return await this.getRequest<WithPaginationResponse<ApplicantModel>>(RequestMethodEnum.GET, `${this.#applicantsPath}?${searchParams}`, params);
  };
  createApplicant = async (applicant: CreateApplicantRequest) => {
    return await this.getRequest<ResponseIdModel>(RequestMethodEnum.POST, this.#applicantsPath, applicant);
  };
  updateApplicant = async (applicant: UpdateApplicantRequest, applicantId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#applicantsPath}/${applicantId}`, applicant);
  };
  deleteApplicant = async (applicantId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.DELETE, `${this.#applicantsPath}/${applicantId}`);
  };
  getApplicantByExternalId = async (externalId: string) => {
    return await this.getRequest<ApplicantModel>(RequestMethodEnum.GET, `${this.#applicantsPath}/by_external_id/${externalId}`);
  };
  getApplicantTelegramLink = async (applicantId: string, data: ApplicantTelegramRequest) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#applicantsPath}/${applicantId}/link/tg`, data);
  };
  changeApplicantSearchOptions = async (applicantId: string, data: ApplicantSearchOptions) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#applicantsPath}/${applicantId}/search-options`, data);
  };
  changeApplicantAmlScreening = async (applicantId: string, data: ChangeApplicantAmlScreeningRequest) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#applicantsPath}/${applicantId}/screening`, data);
  };
}