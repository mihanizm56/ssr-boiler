import * as React from 'react';
import s from './index.scss';
// Компонент должен быть классом так как в client.tsx на него должна быть возможность получить ref
export class Page extends React.PureComponent {
    render() {
        return React.createElement("div", { className: s.root }, "500 \u2013 Error");
    }
}
//# sourceMappingURL=index.js.map