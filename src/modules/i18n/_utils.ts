import { i18n as i18nInstance } from 'i18next';

interface IProps extends React.Props<any> {
  namespaces: string[];
  instance: i18nInstance;
  locale: string;
}

/**
 * Динамическая подгрузка неймспейсов с переводами
 */
export const loadNamespaces = async ({
  namespaces,
  instance,
  locale,
}: IProps) => {
  if (__SERVER__) {
    const resources: Record<string, any> = {};
    const translationNamespaces = [];
    const commonTranslations = instance.getResourceBundle(locale, 'common');
    // Всегда добавляем common неймспейс
    if (!commonTranslations) {
      translationNamespaces.push('common');
    } else {
      resources.common = commonTranslations;
    }
    if (namespaces && namespaces.length > 0) {
      namespaces.forEach(namespace => {
        translationNamespaces.push(namespace);
      });
    }
    if (translationNamespaces.length > 0) {
      await instance.loadNamespaces(translationNamespaces);
      translationNamespaces.forEach(namespace => {
        resources[namespace] = instance.getResourceBundle(locale, namespace);
      });
    }
    return resources;
  }
  if (__CLIENT__) {
    const translationNamespaces = [];
    const commonTranslations = instance.getResourceBundle(locale, 'common');
    if (!commonTranslations) {
      // Всегда добавляем common неймспейс
      translationNamespaces.push('common');
    }
    if (namespaces && namespaces.length > 0) {
      namespaces.forEach(namespace => {
        translationNamespaces.push(namespace);
      });
    }
    if (translationNamespaces.length > 0) {
      await instance.loadNamespaces(translationNamespaces);
    }
    return {};
  }

  return {};
};
