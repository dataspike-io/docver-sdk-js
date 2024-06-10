import { ProfileModel, ProfileSettingsModel } from './profile-model.js';


export type BaseProfileModel = Pick<
  ProfileModel,
  'name' | 'description'
  > & {
  settings: Omit<
    ProfileSettingsModel,
    'manual_fields_settings' | 'finish_screen_settings'
    > &
    Partial<
      Pick<
       ProfileSettingsModel,
        'manual_fields_settings' | 'finish_screen_settings'
        >
      >;
};
