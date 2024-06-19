import {
  ApplicantSearchOptions,
  CreateApplicantRequest,
  SearchApplicantRequest,
  UpdateApplicantRequest,
} from './models/index.ts';
import { AmlRiskScoreEnum, EntityTypeEnum, TagEnum } from '../../enums/index.ts';

import { ApplicantGenderEnum } from './enums/index.ts';

const searchApplicants = {
  page: 0,
  limit: 20,
} as SearchApplicantRequest;


const createApplicant = {
  external_id: 'test-1',
  email: 'Oleg@c.com',
  phone: '+111',
  aml_screening_enabled: false,
  applicant_type: EntityTypeEnum.PERSON,
  info: {
    full_name: 'Oleg Olegov',
    first_name: 'Oleg',
    last_name: 'Olegov',
    dob: '1900-01-01',
    gender: ApplicantGenderEnum.M,
    citizenship: 'RU',
    country: 'RU',
    address: 'spb',
    registration_id: '00000',
    addresses: {
      residence: {
        country: 'RU',
        city: 'spb',
        postal_code: '190000',
        street: 'spb',
      },
    },
    custom_fields: {
      'field_1': 'field_1',
      'field_2': 'field_2',
      'field_3': 'field_3',
    },
  },
} as CreateApplicantRequest;


const updatedApplicant = {
  // external_id: 'external_id_6',
  email: 'Anton@c.com',
  phone: '+222',
  applicant_type: EntityTypeEnum.PERSON,
  full_name: 'Anton Antonov',
  first_name: 'Anton',
  last_name: 'Antonov',
  dob: '2000-01-01',
  gender: ApplicantGenderEnum.M,
  citizenship: 'UM',
  country: 'UM',
  address: 'trololo',
  registration_id: '1111',
  addresses: {
    residence: {
      country: 'UM',
      city: 'trololo',
      postal_code: '200000',
      street: 'trololo',
    },
  },
  custom_fields: {
    'field_1': 'field_11',
    'field_2': 'field_22',
    'field_3': 'field_33',
  },
} as UpdateApplicantRequest;


const applicantTelegramLink = {
  tg_profile: '1111111',
};

const applicantSearchOptions = {
  'risk_scores': [
    AmlRiskScoreEnum.MEDIUM, AmlRiskScoreEnum.LOW,
  ],
  'tags': [
    TagEnum.SANCTIONS, TagEnum.LEAKS,
  ],
  'sources': [
    'UK_OFSI',
  ],
  'fuzziness': true,
  'phonetics': true,
  'mode': 0,
} as ApplicantSearchOptions;

const applicantAmlScreening = {
  aml_screening_enabled: true,
};

const deleteApplicantTest = async (applicant: CreateApplicantRequest, createFunc: any, deleteFunc: any) => {
  const createApplicant = await createFunc(applicant);
  const createApplicantId = createApplicant.data.id;

  if (createApplicant.data.id) {
    console.log('Create applicant:', createApplicantId);
    const deleteApplicant = await deleteFunc(createApplicantId);
    const isSuccessDeleteApplicant = deleteApplicant.status === 200;

    if (isSuccessDeleteApplicant) {
      console.log('Delete applicant:', createApplicantId);

    } else {
      console.log('Failed delete applicant:', createApplicantId);
    }
  }
};

const updateApplicantTest = async (applicant: CreateApplicantRequest, updatedApplicant: UpdateApplicantRequest, createFunc: any, updateFunc: any, getFunc: any) => {
  const createApplicant = await createFunc(applicant);
  const createApplicantId = createApplicant.data.id;

  if (createApplicant.data.id) {
    console.log('Create applicant:', createApplicantId);
    const updateApplicant = await updateFunc(updatedApplicant, createApplicantId);
    const isSuccessUpdateApplicant = updateApplicant.status === 200;
    console.log(updateApplicant);
    if (isSuccessUpdateApplicant) {
      console.log('Update applicant:', createApplicantId);

      const applicantApi = await getFunc(createApplicantId);
      const applicantApiBody = applicantApi.data;


      const result = [
        ['send', JSON.stringify(applicant)],
        ['update', JSON.stringify(updatedApplicant)],
        ['given', JSON.stringify(applicantApiBody)],
      ];
      console.table(result);

    } else {
      console.log('Failed update applicant:', createApplicantId);
    }
  }
};

export const applicantExamples = {
  searchApplicants,
  createApplicant,
  updatedApplicant,
  applicantTelegramLink,
  applicantSearchOptions,
  applicantAmlScreening,
  deleteApplicantTest,
  updateApplicantTest,
};

