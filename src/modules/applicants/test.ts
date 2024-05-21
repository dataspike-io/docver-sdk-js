import {  CreateApplicantRequest, SearchApplicantRequest } from './models/index.js';
import { EntityTypeEnum } from '../../enums/index.js';

import { GenderEnum } from './enums/index.js';


export const applicantId =  '1ef0c6f9-d9a6-6976-b51d-d57a050caddc'

export const searchApplicants = {
  page: 0,
  limit: 20
} as SearchApplicantRequest


export const createApplicant = {
  email: 'test@c.com',
  phone: '+222',
  aml_screening_enabled: true,
  applicant_type: EntityTypeEnum.PERSON,
  info: {
    full_name: 'full_name1',
    first_name: 'first_name2',
    last_name: 'last_name',
    dob: '1900-01-01',
    gender: GenderEnum.M,
    citizenship: 'RU',
    country: 'NZ',
    address: 'addressaddressaddress',
    registration_id: 'registration_id3',
    phone: '+333',
    addresses: {
      residence: {
        country: 'RU',
        city:  'city4',
        postal_code: 'postal_code5',
        street: 'street6',
      }
    }
  }
} as CreateApplicantRequest