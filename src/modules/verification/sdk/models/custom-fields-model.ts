export type CustomFieldsModel = {
  full_name?: ManualFieldModel;
  email?: ManualFieldModel;
  phone?: ManualFieldModel;
  country?: ManualFieldModel;
  dob?: ManualFieldModel;
  gender?: ManualFieldModel;
  citizenship?: ManualFieldModel;
  address?: ManualFieldModel;
  custom_fields?: CustomManualFieldModel[];
}
export type ManualFieldModel = {
  enabled: boolean;
  caption?: string;
  order?: number;
};

export type CustomManualFieldModel = {
  label: string;
  caption?: string;
  order?: number;
};




