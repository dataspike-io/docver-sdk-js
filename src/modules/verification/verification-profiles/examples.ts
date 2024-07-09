import { SearchProfileRequest } from './models/search-profile-request';
import { VerificationBiometricTypeEnum, VerificationDocumentTypeEnum } from '../../../enums';
import { BaseProfileModel, CreateVerificationLinkRequest } from './models';

const searchVerificationProfileTest = {
  page: 0,
  limit: 10,
} as SearchProfileRequest;

const createProfileTest = {
  name: 'backend api test',
  description: 'description of profile.',
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
    countries: ['RU'],
    regions: ['RU'],
    area_filter_type: 'include',
    allow_poi_manual_uploads: true,
    allow_desktop: true,
    ui_settings: {},
    manual_fields_settings: {
      enabled: true,
      description: 'string',
      full_name: {
        enabled: true,
        caption: 'Oleg',
        order: 1,
      },
      email: {
        enabled: true,
        caption: 'ololo@c.com',
        order: 2,
      },
      phone: {
        enabled: true,
        caption: '+234234',
        order: 3,
      },
      country: {
        enabled: true,
        caption: 'RU',
        order: 4,
      },
      dob: {
        enabled: true,
        caption: 'dob',
        order: 5,
      },
      gender: {
        enabled: true,
        caption: 'gender',
        order: 6,
      },
      citizenship: {
        enabled: true,
        caption: 'citizenship',
        order: 7,
      },
      address: {
        enabled: true,
        caption: 'address',
        order: 8,
      },
      custom_fields: [
        {
          label: 'label',
          caption: 'caption',
        },
      ],
    },
    finish_screen_settings: {
      enabled: true,
      title: 'asdadas',
      main_text: 'main_text',
      redirect_warning: 'https://www.google.com/',
      cta: '1111',
      redirect_link: 'https://www.google.com/',
    },
    link: {
      link_id: 'LBY6WV5YRLEFUH5DR',
      created_at: '2024-05-27T15:26:13.719995Z',
      expiration_minutes: 240,
      manual_fields_settings: {
        enabled: false,
        custom_fields: [],
      },
      finish_screen_settings: {
        enabled: false,
      },
      telegram_link: 'https://am.dataspike.dev/vp/LBY6WV5YRLEFUH5DR?target=tg',
      web_link: 'https://am.dataspike.dev/vp/LBY6WV5YRLEFUH5DR?target=web',
    },
  },
} as BaseProfileModel;
const updateProfileTest = {
  name: 'backend api test',
  description: 'description of profile.',
  settings: {
    poi_required: true,
    poi_allowed_documents: [VerificationDocumentTypeEnum.PASSPORT] as VerificationDocumentTypeEnum[],
    face_comparison_required: true,
    face_comparison_allowed_documents: [VerificationBiometricTypeEnum.SELFIE] as VerificationBiometricTypeEnum[],
    poa_required: true,
    disable_cross_check_by_bio: true,
    disable_cross_check_by_photo: true,
    disable_verify_poa_country_match_with_poi: false,
    countries: ['US'],
    regions: ['US'],
    area_filter_type: 'include',
    allow_poi_manual_uploads: true,
    allow_desktop: true,
    ui_settings: {},
    manual_fields_settings: {
      enabled: true,
      description: 'string',
      full_name: {
        enabled: true,
        caption: 'Anton',
        order: 1,
      },
      email: {
        enabled: true,
        caption: 'ololo@c.com',
        order: 2,
      },
      phone: {
        enabled: true,
        caption: '+1111',
        order: 3,
      },
      country: {
        enabled: true,
        caption: 'US',
        order: 4,
      },
      dob: {
        enabled: true,
        caption: 'dob',
        order: 5,
      },
      gender: {
        enabled: true,
        caption: 'gender',
        order: 6,
      },
      citizenship: {
        enabled: true,
        caption: 'citizenship11',
        order: 7,
      },
      address: {
        enabled: true,
        caption: 'address',
        order: 8,
      },
      custom_fields: [
        {
          label: 'label',
          caption: 'caption',
        },
      ],
    },
    finish_screen_settings: {
      enabled: true,
      title: 'asdadas',
      main_text: 'main_text',
      redirect_warning: 'https://www.google.com/',
      cta: '1111',
      redirect_link: 'https://www.google.com/',
    },
  },
} as BaseProfileModel;

const profileIdTest = '1ef1ccc1-08ac-62f0-b4e4-2b34402a59f0';

const verificationLink = {
  expiration_in_minutes: 340,
  // "manual_field_settings": {
  //   "enabled": true,
  //   "description": "string",
  //   "full_name": {
  //     "enabled": true,
  //     "caption": "full_name",
  //     "order": 1
  //   },
  //   "email": {
  //     "enabled": true,
  //     "caption": "email",
  //     "order": 2
  //   },
  //   "phone": {
  //     "enabled": true,
  //     "caption": "phone",
  //     "order": 3
  //   },
  //   "country": {
  //     "enabled": true,
  //     "caption": 'country',
  //     "order": 4
  //   },
  //   "dob": {
  //     "enabled": true,
  //     "caption": "string",
  //     "order": 5
  //   },
  //
  // },
} as CreateVerificationLinkRequest;

export const profileExamples = {
  searchVerificationProfileTest,
  createProfileTest,
  updateProfileTest,
  profileIdTest,
  verificationLink,
};
