import { VerificationGenderEnum } from '../enums';
import { VerificationDocumentTypeEnum } from '../../../../enums';

export type VerificationPoiDataModel = {
  parsed_type: VerificationDocumentTypeEnum;
  has_mrz: boolean;
  raw_mrz_type: string;
  country: string;
  full_name: string;
  name: string;
  surname: string;
  document_number: string;
  nationality: string;
  birth_date: string;
  sex: VerificationGenderEnum;
  expiry_date: string;
  issue_date: string;
  pin: string;
  card_number: string;
  license_number: string;
  license_type: string;
  license_class: string;
  cpf_number: string;
  vin: string;
  nin: string;
  occupation: string;
  polling_unit: string;
  region: string;
  restrictions: string;
  height: string;
  registration_date: string;
  parents_names: string;
  endorsements: string;
  // old fields
  document_type?: string;
  doc_number?: string;
};
