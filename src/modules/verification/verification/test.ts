
import { VerificationDocumentTypeEnum, VerificationStatusEnum } from '../../../enums/index.js';
import { SearchVerificationRequest } from './models/index.js';

const searchVerification = {
  page: 0,
  limit: 10,
  name: 'EVGENII',
  // country: 'RU',
  // from: '1900-01-01',
  // to: '2010-01-01',
  document_type: [VerificationDocumentTypeEnum.PASSPORT],
  // profile: string[];
  status: [VerificationStatusEnum.FAILED]
} as SearchVerificationRequest

const createVerification = {
  applicant_id: '1ee69ccd-e211-6bb5-a969-f11187272763',
  profile_id: '1eed2585-424f-67ec-8f88-bfbe1cfbe558',
  expiration_minutes: 500
}


export const verificationTest = {
  searchVerification,
  createVerification
}