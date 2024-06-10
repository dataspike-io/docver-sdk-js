import { CustomFieldsModel } from '../../sdk/index.ts';

export type VerificationProfileManuelFieldsSettingsModel =  CustomFieldsModel &{
  enabled: boolean;
  description?: string;

};
