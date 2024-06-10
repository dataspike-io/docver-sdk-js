import { WithPaginationRequest } from '../../../../models/index.js';
import { Iso3166Alpha2Code } from 'iso-3166-ts';
import {
  VerificationDocumentTypeEnum,
  VerificationStatusEnum,
} from '../../../../enums/index.js';

export type SearchVerificationRequest = WithPaginationRequest & {
  name?: string;
  country?: Iso3166Alpha2Code;
  from?: string;
  to?: string;
  document_type?: VerificationDocumentTypeEnum[];
  profile?: string[];
  status?: VerificationStatusEnum[];
};