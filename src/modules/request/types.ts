export type ResponseModel<T> = {
  url: string;
  status: number,
  statusText: string,
  data: T
}

export type  ResponseErrorModel = {
  message: string
}

export  type ResponseIdModel = {
  id: string
}