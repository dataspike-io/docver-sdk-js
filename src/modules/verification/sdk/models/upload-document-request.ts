import {
  VerificationAddressTypeEnum,
  VerificationBiometricTypeEnum,
  VerificationDocumentTypeEnum,
} from '../../../../enums/index.ts';
import { DocumentSideEnum } from '../enums/index.ts';

export type UploadDocumentRequest = {
  file: File;
  document_type:
    | VerificationDocumentTypeEnum
    | VerificationBiometricTypeEnum
    | VerificationAddressTypeEnum;
  side?: DocumentSideEnum;
  issued_country?: string;
}