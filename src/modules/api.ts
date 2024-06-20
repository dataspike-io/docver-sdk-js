import { AmlApi } from './aml/api.ts';
import { ApplicantApi } from './applicant/api.ts';
import { SdkApi, VerificationApi, VerificationProfileApi } from './verification/index.ts';
import { WebhookApi } from './webhook/index.ts';


export class Api {
  token: string;
  isSandbox?: boolean;
  aml: AmlApi;
  applicant: ApplicantApi;
  profile: VerificationProfileApi;
  verification: VerificationApi;
  sdk: SdkApi;
  webhook: WebhookApi;

  constructor(token: string, isSandbox: boolean = false) {
    this.token = token;
    this.isSandbox = isSandbox;
    this.aml = new AmlApi(this.token, this.isSandbox);
    this.applicant = new ApplicantApi(this.token, this.isSandbox);
    this.profile = new VerificationProfileApi(this.token, this.isSandbox);
    this.verification = new VerificationApi(this.token, this.isSandbox);
    this.sdk = new SdkApi(this.token, this.isSandbox);
    this.webhook = new WebhookApi(this.token, this.isSandbox);
  }
}