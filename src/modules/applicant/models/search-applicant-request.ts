import { WithPaginationRequest } from '../../../models/index.ts';
import { EntityTypeEnum } from '../../../enums/index.ts';

export type SearchApplicantRequest = WithPaginationRequest & {
  name?: string;
  country?: string;
  dob?: string;
  type?: EntityTypeEnum;
};