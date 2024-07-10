import dotenv from 'dotenv';
import { DSApi } from './src/modules/api';
import { AmlHistoryModel } from './src/modules/aml/models';
import { amlExampleRequests } from './src/modules/aml';
import { profileExamples } from './src/modules/verification/verification-profiles';
import { applicantExamples } from './src/modules/applicant';
import * as path from 'path';
import { sdkExamples } from './src/modules/verification/sdk';
import { VerificationBiometricTypeEnum } from './src/enums/verification';
import { ResponseIdModel } from './src/modules/base-api';
import { verificationExamples } from './src/modules/verification/verification';

dotenv.config();

const api = new DSApi(process.env.API_TOKEN || '');

const startSearchAml = async () => {
  const searchAml = await api.aml.search(amlExampleRequests.amlSearchExample);
  const searchAmlData = searchAml?.data as AmlHistoryModel;
  const searchAmlId = searchAmlData?.search_uuid;


  const amlHistory = await api.aml.getHistoryById(searchAmlId);
  const amlHistoryData = amlHistory?.data;

};

const startVerificationProfile = async () => {
  const verificationProfiles = await api.profile.getProfiles(profileExamples.searchVerificationProfileExample);
  const createdProfile = await api.profile.createProfile(profileExamples.createProfileExample);
};

const startApplicant = async () => {
  const applicants = await api.applicant.getApplicants(applicantExamples.searchApplicantsExample);

  const createdApplicant = await api.applicant.createApplicant(applicantExamples.createApplicantExample);
  const applicantData = createdApplicant?.data as ResponseIdModel;
  const applicantId = applicantData?.id;

  const applicant = await api.applicant.getApplicantById(applicantId);
};

const startVerification = async () => {
  const applicantId = '*';
  const profileId = '*';
  const verificationShortId = '*';

  const verifications = await api.verification.getVerifications(verificationExamples.searchVerificationExample);

  const verification = await api.verification.createVerification({
    applicant_id: applicantId,
    profile_id: profileId,
  });

  // example for driver_license
  const photoFront = path.join('*', 'front.jpeg');
  const photoBack = path.join('*', 'back.jpeg');
  const photoFace = path.join('*', 'face.jpeg');
  const absolutePhotoFrontPath = path.resolve(__dirname, photoFront);
  const absolutePhotoBackPath = path.resolve(__dirname, photoBack);
  const absolutePhotoFacePath = path.resolve(__dirname, photoFace);

  const uploadDocFront = await api.sdk.uploadDocument(verificationShortId, {
    ...sdkExamples.docExample,
    file: absolutePhotoFrontPath,
  });

  const uploadDocBack = await api.sdk.uploadDocument(verificationShortId, {
    ...sdkExamples.docExample,
    file: absolutePhotoBackPath,
  });
  const uploadDocFace = await api.sdk.uploadDocument(verificationShortId, {
    ...sdkExamples.docExample,
    file: absolutePhotoFacePath,
    document_type: VerificationBiometricTypeEnum.LIVENESS_PHOTO,
  });
  const proceedVerification = await api.sdk.proceedVerification(verificationShortId);
};

