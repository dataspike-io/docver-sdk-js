import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { VerificationStatusEnum } from '../../../../enums';

export type CreateVerificationRequest = {
  applicant_id: string;
  profile_id: string;
  applicant_country?: Iso3166Alpha2Code;
  expiration_minutes?: number;
  sandbox_result?: {
    status: VerificationStatusEnum;
    errors: {
      document_mrz: number[];
      face_comparison: number[];
      poa: number[];
      liveness: number[];
    };
  };
};
