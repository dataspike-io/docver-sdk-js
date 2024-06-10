import { BaseAPi, RequestMethodEnum, ResponseIdModel, ResponseModel } from '../../base-api/index.js';

import {
  CreateVerificationRequest,
  ProceedVerificationErrorModel,
  SearchVerificationRequest,
  VerificationResultModel,
} from './models/index.js';
import { WithPaginationResponse } from '../../../models/index.js';


export class VerificationApi extends BaseAPi {
  #verificationsPath = `/api/v3/verifications`;

  constructor(token: string) {
    super(token);
  }

  getVerifications = async (params: SearchVerificationRequest) => {
    const searchParams = new URLSearchParams(params as any).toString();
    return await this.getRequest<WithPaginationResponse<VerificationResultModel>>(RequestMethodEnum.GET, `${this.#verificationsPath}?${searchParams}`);
  };
  getVerificationById = async (verificationId: string) => {
    return await this.getRequest<VerificationResultModel>(RequestMethodEnum.GET, `${this.#verificationsPath}/${verificationId}`);
  };
  getVerificationByShortId = async (verificationShortId: string | VerificationResultModel['verification_url_id']) => {
    return await this.getRequest<VerificationResultModel>(RequestMethodEnum.GET, `${this.#verificationsPath}/short/${verificationShortId}`);
  };
  getVerificationsForApplicant = async (applicantId: string, params?: SearchVerificationRequest) => {
    // not working
    const searchParams = new URLSearchParams(params as any).toString();
    return await this.getRequest<VerificationResultModel>(RequestMethodEnum.GET, `${this.#verificationsPath}/applicants/${applicantId}?${searchParams}`);
  };
  createVerification = async (verification: CreateVerificationRequest) => {
    return await this.getRequest<VerificationResultModel>(RequestMethodEnum.POST, this.#verificationsPath, verification);
  };
  proceedVerification = async (verificationId: string) => {
    let res = await this.getRequest<string>(RequestMethodEnum.POST, `${this.#verificationsPath}/${verificationId}/proceed`);
    return res as ResponseModel<string, unknown> | ResponseModel<ProceedVerificationErrorModel, unknown>;
  };
  cancelVerification = async (verificationId: string) => {
    return await this.getRequest<ResponseIdModel>(RequestMethodEnum.POST, `${this.#verificationsPath}/${verificationId}/cancel`);
  };

}
