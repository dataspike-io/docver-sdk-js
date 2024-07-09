export type ResponseModel<D, R> = {
  url: string;
  status: number;
  statusText: string;
  data: D;
  requestBody?: R;
};

export type ResponseErrorModel = ResponseDefaultModel & {
  status?: {
    type: string;
  };
  error?: string;
};

export type ResponseDefaultModel = {
  message: string;
};

export type ResponseIdModel = {
  id: string;
};
