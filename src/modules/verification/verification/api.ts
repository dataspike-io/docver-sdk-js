import { BaseAPi, RequestMethodEnum, ResponseIdModel, ResponseModel } from '../../base-api/index.js';

import {
  CreateVerificationRequest,
  ProceedVerificationErrorModel,
  SearchVerificationRequest,
  VerificationResultModel,
} from './models/index.js';
import { WithPaginationResponse } from '../../../models/index.js';
import { convertToSearchParams } from '../../utilts.ts';


export class VerificationApi extends BaseAPi {
  #verificationsPath = `/api/v3/verifications`;

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getVerifications = async (params: SearchVerificationRequest) => {
    return await this.getRequest<WithPaginationResponse<VerificationResultModel>>({ paramsQuery: `${this.#verificationsPath}?${convertToSearchParams(params)}` });
  };
  getVerificationById = async (verificationId: string) => {
    return await this.getRequest<VerificationResultModel>({ paramsQuery: `${this.#verificationsPath}/${verificationId}` });
  };
  getVerificationByShortId = async (verificationShortId: string | VerificationResultModel['verification_url_id']) => {
    return await this.getRequest<VerificationResultModel>({ paramsQuery: `${this.#verificationsPath}/short/${verificationShortId}` });
  };
  getVerificationsForApplicant = async (applicantId: string, params?: SearchVerificationRequest) => {
    // not working
    return await this.getRequest<VerificationResultModel>({ paramsQuery: `${this.#verificationsPath}/applicants/${applicantId}?${convertToSearchParams(params)}` });
  };
  createVerification = async (verification: CreateVerificationRequest) => {
    return await this.getRequest<VerificationResultModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: this.#verificationsPath,
      data: verification,
    });
  };
  proceedVerification = async (verificationId: string) => {
    let res = await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#verificationsPath}/${verificationId}/proceed`,
    });
    return res as ResponseModel<string, unknown> | ResponseModel<ProceedVerificationErrorModel, unknown>;
  };
  cancelVerification = async (verificationId: string) => {
    return await this.getRequest<ResponseIdModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#verificationsPath}/${verificationId}/cancel`,
    });
  };

}
