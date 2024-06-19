import { VerificationDocumentTypeEnum } from '../../../enums/index.ts';

const docFront = {
  file: '',
  document_type: VerificationDocumentTypeEnum.PASSPORT,
};
const customFields = {
  full_name: 'Oleg',
  // email: "Oleg@c.com",
  // phone: "+333",
  // country: "asdsd",
  // dob: "1920-10-10",
  // gender: "M",
  // citizenship: "asdad",
  // address: "asdasd",
};

export const sdkExamples = {
  docFront,
  customFields,
};

