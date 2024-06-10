import {AmlReportModel} from "./aml-report-models.ts";

export type AmlHistoryModel = {
  requested_name: string,
  search_uuid: string,
  max_risk_score: string;
  data?: AmlReportModel[]
}