import { DocumentSideEnum } from '../enums';
import {
  VerificationAddressTypeEnum,
  VerificationBiometricTypeEnum,
  VerificationDocumentTypeEnum,
} from '../../../../enums/verification';

export type UploadDocumentModel = {
  document_id: string,
  detected_document_type: VerificationDocumentTypeEnum | VerificationAddressTypeEnum | VerificationBiometricTypeEnum,
  detected_document_side?: DocumentSideEnum,
  detected_two_side_document: boolean,
  detected_country: string
}