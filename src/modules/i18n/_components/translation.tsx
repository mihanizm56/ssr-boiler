import * as React from 'react';
import { TFunction } from 'i18next';
import { Translation as ReactI18NextTranslation } from 'react-i18next';

interface IProps extends React.Props<any> {
  children: (t: TFunction) => React.ReactNode;
}

export const Translation = React.memo(({ children, ...props }: IProps) => (
  <ReactI18NextTranslation {...props}>
    {(t: TFunction) => {
      // Если не подгрузился перевод фразы, выводим ключ
      // стандартная реализация крашит приложение
      const wrappedT = (key: string) => t(key) || key;

      return children(wrappedT);
    }}
  </ReactI18NextTranslation>
));
