import { BaseAPi, RequestMethodEnum, ResponseDefaultModel, ResponseIdModel } from '../../base-api/index.ts';
import { SearchProfileRequest } from './models/search-profile-request.js';
import { WithPaginationResponse } from '../../../models/index.js';
import { BaseProfileModel, CreateVerificationLinkRequest, ProfileModel } from './models/index.js';

export class VerificationProfileApi extends BaseAPi {
  #profilePath = '/api/v3/profiles';

  constructor(token: string) {
    super(token);
  }

  getProfiles = async (params: SearchProfileRequest) => {
    const searchParams = new URLSearchParams(params as any).toString();
    return await this.getRequest<WithPaginationResponse<ProfileModel>>(RequestMethodEnum.GET, `${this.#profilePath}?${searchParams}`);
  };
  createProfile = async (data: BaseProfileModel) => {
    return await this.getRequest<ResponseIdModel>(RequestMethodEnum.POST, this.#profilePath, data);
  };
  getProfileById = async (profileId: string) => {
    return await this.getRequest<ProfileModel>(RequestMethodEnum.GET, `${this.#profilePath}/${profileId}`);
  };
  updateProfile = async (profile: BaseProfileModel, profileId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#profilePath}/${profileId}`, profile);
  };
  archiveProfile = async (profileId: string) => {
    return await this.getRequest<ResponseDefaultModel>(RequestMethodEnum.DELETE, `${this.#profilePath}/${profileId}`);
  };
  setDefaultProfile = async (profileId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#profilePath}/${profileId}/set_default`);
  };
  createVerificationLink = async (verificationLink: CreateVerificationLinkRequest, profileId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#profilePath}/${profileId}/link`, verificationLink);
  };
  getVerificationLinkByLinkId = async (linkId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.GET, `/api/v3/sdk/link/${linkId}`);
  };
  changeVerificationLinkOptions = async (verificationLink: CreateVerificationLinkRequest, linkId: string) => {
    return await this.getRequest<{
      link_id: string
    }>(RequestMethodEnum.POST, `${this.#profilePath}/link/${linkId}`, verificationLink);
  };
  archiveVerificationLink = async (linkId: string) => {
    // not working
    return await this.getRequest<string>(RequestMethodEnum.DELETE, `${this.#profilePath}/link/${linkId}`);
  };
  unarchiveVerificationLink = async (linkId: string) => {
    return await this.getRequest<string>(RequestMethodEnum.POST, `${this.#profilePath}/link/${linkId}/unarchive`);
  };
}