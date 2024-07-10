import {
  VerificationAddressTypeEnum,
  VerificationBiometricTypeEnum,
  VerificationDocumentTypeEnum,
} from '../../../../enums';
import { DocumentSideEnum } from '../enums';

export type UploadDocumentRequest = {
  file: File | string;
  document_type: VerificationDocumentTypeEnum | VerificationBiometricTypeEnum | VerificationAddressTypeEnum;
  side?: DocumentSideEnum;
  issued_country?: string;
};
