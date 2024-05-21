import { WithPaginationRequest } from '../../../models/index.js';
import { EntityTypeEnum } from '../../../enums/index.js';

export type SearchApplicantRequest = WithPaginationRequest & {
  name?: string;
  country?: string;
  dob?: string;
  type?: EntityTypeEnum;
};