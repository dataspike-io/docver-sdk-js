import { BaseAPi, RequestMethodEnum, ResponseDefaultModel, ResponseModel } from '../../base-api';
import { ProceedVerificationErrorModel, VerificationResultModel } from '../verification';
import { SetCustomFieldsRequest, UploadDocumentRequest } from './models';
import { utils } from '../utils';

export class SdkApi extends BaseAPi {
  #verificationsPath = `/api/v3/sdk`;
  #uploadPath = `/api/v3/upload/sdk`;
  #uploadHeaders = {
    'Content-Type': 'multipart/form-data',
  };

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getVerificationByShortId = async (verificationShortId: string | VerificationResultModel['verification_url_id']) => {
    return await this.getRequest<VerificationResultModel>({
      paramsQuery: `${this.#verificationsPath}/${verificationShortId}`,
    });
  };
  uploadDocument = async (
    verificationShortId: string | VerificationResultModel['verification_url_id'],
    data: UploadDocumentRequest,
  ) => {
    const currentFile = utils.convertFile(data.file);
    const currentData = {
      ...data,
      file: currentFile,
    };

    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#uploadPath}/${verificationShortId}`,
      data: currentData,
      headers: this.#uploadHeaders,
    });
  };
  proceedVerification = async (verificationShortId: string | VerificationResultModel['verification_url_id']) => {
    const res = await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#verificationsPath}/${verificationShortId}/proceed`,
    });
    return res as ResponseModel<string, unknown> | ResponseModel<ProceedVerificationErrorModel, unknown>;
  };
  setCustomFields = async (
    verificationShortId: string | VerificationResultModel['verification_url_id'],
    data: SetCustomFieldsRequest,
  ) => {
    return await this.getRequest<ResponseDefaultModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#verificationsPath}/${verificationShortId}/fields`,
      data,
    });
  };
}
