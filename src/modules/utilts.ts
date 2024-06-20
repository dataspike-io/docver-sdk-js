export const convertToSearchParams = (params?: { [key: string]: unknown }): string => {
  if (!params) {
    return '';
  }
  let res = Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {} as Record<string, string>);
  return new URLSearchParams(res).toString();
};