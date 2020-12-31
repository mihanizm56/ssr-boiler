type ParamsType = {
  locale: string;
  namespace: string;
  baseUrl?: string;
};

export const getI18nextRequestEndpoint = ({
  locale,
  namespace,
  baseUrl,
}: ParamsType) =>
  __SERVER__
    ? `${baseUrl}/I18N/${namespace}/${locale}`
    : `/I18N/${namespace}/${locale}`;
