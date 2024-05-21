import { GenderEnum } from '../enums/index.js';
import { Iso3166Alpha2Code } from 'iso-3166-ts';
import { TDateISODate } from '../../../models/date-iso.js';

export type ApplicantInfoModel = Partial<{
  custom_fields?: {
    [key: string]: string;
  };
  full_name?: string;
  first_name?: string;
  last_name?: string;
  dob?: TDateISODate;
  gender?: GenderEnum;
  citizenship?: Iso3166Alpha2Code;
  country?: Iso3166Alpha2Code;
  address?: string;
  registration_id?: string;
  phone?: string;
  addresses?: {
    residence?: {
      country?: Iso3166Alpha2Code;
      city?: string;
      postal_code?: string;
      street?: string;
    };
  };
}>;

