import { CreateApplicantRequest, SearchApplicantRequest } from './models';
import { EntityTypeEnum } from '../../enums';

import { ApplicantGenderEnum } from './enums';

const searchApplicantsExample = {
  page: 0,
  limit: 20,
} as SearchApplicantRequest;

const createApplicantExample = {
  email: 'john.doe@example.org',
  phone: '+123456789',
  aml_screening_enabled: true,
  applicant_type: EntityTypeEnum.PERSON,
  info: {
    full_name: 'John Doe',
    first_name: 'John',
    last_name: 'Doe',
    dob: '1987-12-24',
    gender: ApplicantGenderEnum.M,
    citizenship: 'DE',
    country: 'DE',
    address: 'Paris, France',
    registration_id: '',
    addresses: {
      residence: {
        country: 'DE',
        city: 'Berlin',
        postal_code: '10999',
        street: 'Wiener Straße 17',
      },
    },
    custom_fields: {},
    search_options: {
      'risk_scores': [
        'Low',
      ],
      'tags': [
        'Finance',
      ],
      'sources': [
        'UK_OFSI',
      ],
      'fuzziness': true,
      'phonetics': true,
      'mode': 0,
    },
  },
} as CreateApplicantRequest;


export const applicantExamples = {
  searchApplicantsExample,
  createApplicantExample,
};