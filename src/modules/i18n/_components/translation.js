import * as React from 'react';
import { Translation as ReactI18NextTranslation } from 'react-i18next';
export const Translation = React.memo(({ children, ...props }) => (React.createElement(ReactI18NextTranslation, Object.assign({}, props), (t) => {
    // Если не подгрузился перевод фразы, выводим ключ
    // стандартная реализация крашит приложение
    const wrappedT = (key) => t(key) || key;
    return children(wrappedT);
})));
//# sourceMappingURL=translation.js.map