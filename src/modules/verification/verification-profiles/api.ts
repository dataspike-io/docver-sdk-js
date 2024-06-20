import { BaseAPi, RequestMethodEnum, ResponseDefaultModel, ResponseIdModel } from '../../base-api';
import { SearchProfileRequest } from './models/search-profile-request';
import { WithPaginationResponse } from '../../../models';
import { BaseProfileModel, CreateVerificationLinkRequest, ProfileModel } from './models';
import { convertToSearchParams } from '../../utilts';

export class VerificationProfileApi extends BaseAPi {
  #profilePath = '/api/v3/profiles';

  constructor(token: string, isSandbox: boolean) {
    super(token, isSandbox);
  }

  getProfiles = async (params: SearchProfileRequest) => {
    return await this.getRequest<WithPaginationResponse<ProfileModel>>({
      paramsQuery: `${this.#profilePath}?${convertToSearchParams(params)}`,
    });
  };
  createProfile = async (profile: BaseProfileModel) => {
    return await this.getRequest<ResponseIdModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: this.#profilePath,
      data: profile,
    });
  };
  getProfileById = async (profileId: string) => {
    return await this.getRequest<ProfileModel>({ paramsQuery: `${this.#profilePath}/${profileId}` });
  };
  updateProfile = async (profileId: string, profile: BaseProfileModel) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#profilePath}/${profileId}`,
      data: profile,
    });
  };
  archiveProfile = async (profileId: string) => {
    return await this.getRequest<ResponseDefaultModel>({
      method: RequestMethodEnum.DELETE,
      paramsQuery: `${this.#profilePath}/${profileId}`,
    });
  };
  setDefaultProfile = async (profileId: string) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#profilePath}/${profileId}/set_default`,
    });
  };
  createVerificationLink = async (profileId: string, verificationLink: CreateVerificationLinkRequest) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#profilePath}/${profileId}/link`,
      data: verificationLink,
    });
  };
  getVerificationLinkByLinkId = async (linkId: string) => {
    return await this.getRequest<string>({ paramsQuery: `/api/v3/sdk/link/${linkId}` });
  };
  changeVerificationLinkOptions = async (linkId: string, verificationLink: CreateVerificationLinkRequest) => {
    return await this.getRequest<{
      link_id: string;
    }>({ method: RequestMethodEnum.POST, paramsQuery: `${this.#profilePath}/link/${linkId}`, data: verificationLink });
  };
  archiveVerificationLink = async (linkId: string) => {
    // not working
    return await this.getRequest<string>({
      method: RequestMethodEnum.DELETE,
      paramsQuery: `${this.#profilePath}/link/${linkId}`,
    });
  };
  unarchiveVerificationLink = async (linkId: string) => {
    return await this.getRequest<string>({
      method: RequestMethodEnum.POST,
      paramsQuery: `${this.#profilePath}/link/${linkId}/unarchive`,
    });
  };
}
