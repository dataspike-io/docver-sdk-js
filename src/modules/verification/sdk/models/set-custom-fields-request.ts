export type SetCustomFieldsRequest = {
  full_name?: string;
  email?: string;
  phone?: string;
  country?: string;
  dob?: string;
  gender?: string;
  citizenship?: string;
  address?: string;
  custom_fields?: {
    [key: string]: string;
  };
}