import { VerificationPhotosKeysEnum } from '../enums';
export type ProceedVerificationErrorModel = {
  id: string;
  error: string;
  pending_documents: VerificationPhotosKeysEnum[];
};
