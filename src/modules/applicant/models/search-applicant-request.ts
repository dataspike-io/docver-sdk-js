import { WithPaginationRequest } from '../../../models';
import { EntityTypeEnum } from '../../../enums';

export type SearchApplicantRequest = WithPaginationRequest & {
  name?: string;
  country?: string;
  dob?: string;
  type?: EntityTypeEnum;
};
