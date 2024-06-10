import { ProfileLinkModel } from './profile-link-model.ts';
import { VerificationBiometricTypeEnum, VerificationDocumentTypeEnum } from '../../../../enums/index.js';
import { VerificationProfileManuelFieldsSettingsModel } from './profile-manual-fields-settings-model.js';
import { ProfileFinishScreenSettingsModel } from './profile-finish-screen-settings-model.js';
import { Iso3166Alpha2Code } from 'iso-3166-ts';

export type ProfileModel = {
  profile_id: string;
  name: string;
  description: string;
  organization_id: string;
  is_default: boolean;
  updated_at: string;
  created_at: string;
  created_by: string;
  settings:ProfileSettingsModel;
  link?: ProfileLinkModel;
};


export type ProfileSettingsModel = {
  poi_required: boolean;
  poi_allowed_documents: VerificationDocumentTypeEnum[];
  face_comparison_required: boolean;
  face_comparison_allowed_documents: VerificationBiometricTypeEnum[];
  poa_required: boolean;
  area_filter_type: 'include' | 'exclude';
  regions: string[];
  countries?: Iso3166Alpha2Code[];
  disable_cross_check_by_bio: boolean;
  disable_cross_check_by_photo: boolean;
  disable_verify_poa_country_match_with_poi: boolean;
  allow_poi_manual_uploads: boolean;
  allow_desktop: boolean;
  manual_fields_settings?: VerificationProfileManuelFieldsSettingsModel;
  finish_screen_settings?: ProfileFinishScreenSettingsModel;
};