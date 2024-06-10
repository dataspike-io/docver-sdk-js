import {
  PhotoTypeEnum,
  VerificationAddressTypeEnum,
  VerificationBiometricTypeEnum,
  VerificationDocumentTypeEnum,
  VerificationStatusEnum,
} from '../../../../enums/index.ts';
import { VerificationProfileManuelFieldsSettingsModel } from '../../verification-profiles/index.ts';
import { VerificationPoiDataModel } from './verification-poi-data-model.ts';

export type VerificationResultModel = {
  id: string;
  organization_id?: string;
  account_id?: string;
  account_email?: string;
  applicant_id: string;
  status: VerificationStatusEnum;
  document_type:
    | VerificationDocumentTypeEnum
    | VerificationBiometricTypeEnum
    | VerificationAddressTypeEnum;
  documents: VerificationDocumentsImg[] | null;
  checks: {
    document_mrz: VerificationCheckResultModel & {
      data?: VerificationPoiDataModel;
    };
    face_comparison: VerificationCheckResultModel & {
      data: unknown;
    };
    liveness: VerificationCheckResultModel & {
      data?: {
        liveness_code: string;
        liveness_score: number;
      };
    };
    poa: VerificationCheckResultModel & {
      data?: unknown;
    };
  };
  created_at: string;
  completed_at: string;
  verification_url: string;
  verification_url_id: string;
  country_code: string;
  expires_at: string;
  poi_data: VerificationPoiDataModel;
  is_sandbox: boolean;
  profile_id?: string;
  document_ids: string[];
  updated_at: string;
  settings: {
    name?: string;
    poi_required: boolean;
    poi_allowed_documents: VerificationDocumentTypeEnum[];
    face_comparison_required: boolean;
    face_comparison_allowed_documents: VerificationBiometricTypeEnum[];
    poa_required: boolean;
    disable_cross_check_by_bio: boolean;
    disable_cross_check_by_photo: boolean;
    disable_verify_poa_country_match_with_poi: boolean;
    countries: string[];
    allow_poi_manual_uploads: boolean;
    allow_desktop: boolean;
    manual_fields_settings: VerificationProfileManuelFieldsSettingsModel;
  };
  aml_search_id?: string;
  manual_fields: {
    [key: string]: string;
  } & {
    custom_fields: {
      [key: string]: string;
    };
  };
};
type VerificationCheckResultModel = {
  errors: VerificationCheckResultErrorsModel[] | [];
  status: VerificationStatusEnum;
  pending_documents: string[];
};

type VerificationDocumentsImg = {
  document_id: string;
  document_type: string;
  content_type: PhotoTypeEnum;
};

export type VerificationCheckResultErrorsModel = {
  code: number;
  message: string;
};