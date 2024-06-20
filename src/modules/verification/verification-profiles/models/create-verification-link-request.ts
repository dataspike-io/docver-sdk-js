import { VerificationProfileManuelFieldsSettingsModel } from './profile-manual-fields-settings-model';

export type CreateVerificationLinkRequest = Omit<VerificationProfileManuelFieldsSettingsModel, 'enabled'> & {
  expiration_in_minutes: number;
};
