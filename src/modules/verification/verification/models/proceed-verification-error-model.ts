import { VerificationPhotosKeysEnum } from '../enums/index.ts';
export type ProceedVerificationErrorModel= {
  id: string,
  error: string,
  pending_documents: VerificationPhotosKeysEnum[]
}
