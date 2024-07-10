import { SearchProfileRequest } from './models/search-profile-request';
import { VerificationBiometricTypeEnum, VerificationDocumentTypeEnum } from '../../../enums';
import { BaseProfileModel } from './models';

const searchVerificationProfileExample = {
  page: 0,
  limit: 10,
} as SearchProfileRequest;

const createProfileExample = {
  name: 'Profile example',
  description: '',
  settings: {
    poi_required: true,
    poi_allowed_documents: [
      VerificationDocumentTypeEnum.PASSPORT,
      VerificationDocumentTypeEnum.VISA,
    ] as VerificationDocumentTypeEnum[],
    face_comparison_required: true,
    face_comparison_allowed_documents: [VerificationBiometricTypeEnum.SELFIE] as VerificationBiometricTypeEnum[],
    poa_required: true,
    disable_cross_check_by_bio: true,
    disable_cross_check_by_photo: true,
    disable_verify_poa_country_match_with_poi: false,
    countries: [],
    regions: [],
    area_filter_type: 'include',
    allow_poi_manual_uploads: true,
    allow_desktop: true,
    ui_settings: {},
    manual_fields_settings: {
      enabled: true,
      description: 'string',
      full_name: {
        enabled: true,
        caption: '',
        order: 1,
      },
      email: {
        enabled: true,
        caption: '',
        order: 2,
      },
      phone: {
        enabled: true,
        caption: '',
        order: 3,
      },
      country: {
        enabled: true,
        caption: '',
        order: 4,
      },
      dob: {
        enabled: true,
        caption: '',
        order: 5,
      },
      gender: {
        enabled: true,
        caption: '',
        order: 6,
      },
      citizenship: {
        enabled: true,
        caption: '',
        order: 7,
      },
      address: {
        enabled: true,
        caption: '',
        order: 8,
      },
      custom_fields: [
        {
          label: '',
          caption: '',
        },
      ],
    },
    finish_screen_settings: {
      enabled: true,
      title: '',
      main_text: '',
      redirect_warning: '',
      cta: '',
      redirect_link: '',
    },
    link: {
      link_id: '',
      created_at: '',
      expiration_minutes: 240,
      manual_fields_settings: {
        enabled: false,
        custom_fields: [],
      },
      finish_screen_settings: {
        enabled: false,
      },
      telegram_link: '',
      web_link: '',
    },
  },
} as BaseProfileModel;


export const profileExamples = {
  searchVerificationProfileExample,
  createProfileExample,
};