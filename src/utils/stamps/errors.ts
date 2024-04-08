// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/utils/errors.ts

export type ProviderError = {
  name?: string;
  message?: string;
  response?: {
    status?: number;
    statusText?: string;
    data: unknown;
  };
};

export function getErrorString(error: ProviderError): string {
  return `${error.name} - ${error.message}|\
response: Status ${error.response?.status} - ${error.response?.statusText}|\
response data: ${JSON.stringify(error?.response?.data)}`;
}
