export type WithPaginationResponse<T> = {
  data: T[];
  has_next: boolean;
};