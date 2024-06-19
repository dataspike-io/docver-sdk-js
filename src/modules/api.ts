import { AmlApi } from './aml/api';
import { ApplicantsApi } from './applicants/api';

export class Api {
  url?: string;
  token: string;
  constructor(token: string, url?: string) {
    this.url = url;
    this.token = token;
  }

  get aml() {
    return new AmlApi(this.token);
  }
  get applicant() {
    return new ApplicantsApi(this.token);
  }
}
