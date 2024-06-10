import { VerificationProfileManuelFieldsSettingsModel } from './profile-manual-fields-settings-model.ts';

export type CreateVerificationLinkRequest = Omit<VerificationProfileManuelFieldsSettingsModel, 'enabled'> & {
  expiration_in_minutes: number
}