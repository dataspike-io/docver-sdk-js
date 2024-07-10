import {
  CreateVerificationRequest,
  ProceedVerificationErrorModel,
  ProceedVerificationModel,
  SearchVerificationRequest,
  VerificationResultModel,
} from './models';
import { WithPaginationResponse } from '../../../models';
import { convertToSearchParams } from '../../utilts';
import { BaseAPi } from '../../base-api/base-api';
import { RequestMethodEnum, ResponseIdModel, ResponseModel } from '../../base-api';

export class VerificationApi extends BaseAPi {
  #verificationsPath = `/api/v3/verifications`;

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getVerifications = async (params: SearchVerificationRequest) => {
    return await this.getRequest<WithPaginationResponse<VerificationResultModel>>({
      query: `${this.#verificationsPath}?${convertToSearchParams(params)}`,
    });
  };
  getVerificationById = async (verificationId: string) => {
    return await this.getRequest<VerificationResultModel>({
      query: `${this.#verificationsPath}/${verificationId}`,
    });
  };
  getVerificationByShortId = async (verificationShortId: string | VerificationResultModel['verification_url_id']) => {
    return await this.getRequest<VerificationResultModel>({
      query: `${this.#verificationsPath}/short/${verificationShortId}`,
    });
  };
  getVerificationsForApplicant = async (applicantId: string, params?: SearchVerificationRequest) => {
    return await this.getRequest<VerificationResultModel>({
      query: `${this.#verificationsPath}/applicants/${applicantId}?${convertToSearchParams(params)}`,
    });
  };
  createVerification = async (verification: CreateVerificationRequest) => {
    return await this.getRequest<VerificationResultModel>({
      method: RequestMethodEnum.POST,
      query: this.#verificationsPath,
      data: verification,
    });
  };
  proceedVerification = async (verificationId: string) => {
    const res = await this.getRequest<ProceedVerificationModel>({
      method: RequestMethodEnum.POST,
      query: `${this.#verificationsPath}/${verificationId}/proceed`,
    });
    return res as ResponseModel<ProceedVerificationModel, unknown> | ResponseModel<ProceedVerificationErrorModel, unknown>;
  };
  cancelVerification = async (verificationId: string) => {
    return await this.getRequest<ResponseIdModel>({
      method: RequestMethodEnum.POST,
      query: `${this.#verificationsPath}/${verificationId}/cancel`,
    });
  };
}