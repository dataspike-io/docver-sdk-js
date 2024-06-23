import { CustomFieldsModel } from '../../sdk';

export type VerificationProfileManuelFieldsSettingsModel = CustomFieldsModel & {
  enabled: boolean;
  description?: string;
};
