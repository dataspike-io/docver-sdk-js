import { AmlApi } from './aml/api.ts';
import { ApplicantApi } from './applicant/api.ts';
import { SdkApi, VerificationApi, VerificationProfileApi } from './verification/index.ts';
import { WebhookApi } from './webhook/index.ts';


export class Api {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  get aml() {
    return new AmlApi(this.token);
  }

  get applicant() {
    return new ApplicantApi(this.token);
  }

  get profile() {
    return new VerificationProfileApi(this.token);
  }

  get verification() {
    return new VerificationApi(this.token);
  }

  get sdk() {
    return new SdkApi(this.token);
  }

  get webhook() {
    return new WebhookApi(this.token);
  }
}