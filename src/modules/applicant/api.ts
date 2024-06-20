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
import { convertToSearchParams } from '../utilts.ts';


export class ApplicantApi extends BaseAPi {
  #applicantsPath = `/api/v3/applicants`;

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getApplicantById = async (applicantId: string) => {
    return await this.getRequest<ApplicantModel>({ paramsQuery: `${this.#applicantsPath}/${applicantId}` });
  };
  getApplicants = async (params: SearchApplicantRequest) => {
    return await this.getRequest<WithPaginationResponse<ApplicantModel>>({ paramsQuery: `${this.#applicantsPath}?${convertToSearchParams(params)}` });
  };
  createApplicant = async (applicant: CreateApplicantRequest) => {
    return await this.getRequest<ResponseIdModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: this.#applicantsPath,
      data: applicant,
    });
  };
  updateApplicant = async (applicantId: string, applicant: UpdateApplicantRequest) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#applicantsPath}/${applicantId}`,
      data: applicant,
    });
  };
  deleteApplicant = async (applicantId: string) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.DELETE,
      paramsQuery: `${this.#applicantsPath}/${applicantId}`,
    });
  };
  getApplicantByExternalId = async (externalId: string) => {
    return await this.getRequest<ApplicantModel>({ paramsQuery: `${this.#applicantsPath}/by_external_id/${externalId}` });
  };
  getApplicantTelegramLink = async (applicantId: string, applicant: ApplicantTelegramRequest) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#applicantsPath}/${applicantId}/link/tg`,
      data: applicant,
    });
  };
  changeApplicantSearchOptions = async (applicantId: string, applicant: ApplicantSearchOptions) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#applicantsPath}/${applicantId}/search-options`,
      data: applicant,
    });
  };
  changeApplicantAmlScreening = async (applicantId: string, applicant: ChangeApplicantAmlScreeningRequest) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#applicantsPath}/${applicantId}/screening`,
      data: applicant,
    });
  };
}