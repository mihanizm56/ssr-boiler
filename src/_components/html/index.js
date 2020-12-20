import * as React from 'react';
import { availableEnvKeys } from '@/available-env-keys';
import { serialize } from '@/_utils/serialize';
export const Html = ({ title, description, keywords, canonical, ogDescription, ogUrl, ogImage, styles, scripts, ssrData, children, }) => (React.createElement("html", null,
    React.createElement("head", null,
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" }),
        React.createElement("title", null, title),
        description && React.createElement("meta", { name: "description", content: description }),
        keywords && React.createElement("meta", { name: "keywords", content: keywords }),
        canonical && React.createElement("link", { rel: "canonical", href: canonical }),
        React.createElement("meta", { property: "og:title", content: title }),
        ogDescription && (React.createElement("meta", { property: "og:description", content: description })),
        ogUrl && React.createElement("meta", { property: "og:url", content: ogUrl }),
        ogImage && React.createElement("meta", { property: "og:image", content: ogImage }),
        styles.map(style => (React.createElement("link", { key: style, rel: "preload", href: style, as: "style" }))),
        scripts.map(script => (React.createElement("link", { key: script, rel: "preload", href: script, as: "script" }))),
        React.createElement("link", { rel: "shortcut icon", type: "image/png", href: "/static/favicon.ico" }),
        React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic-ext", rel: "stylesheet" }),
        styles.map(style => (React.createElement("link", { key: style, rel: "stylesheet", href: style }) // eslint-disable-line
        ))),
    React.createElement("body", null,
        React.createElement("div", { id: "app", 
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: { __html: children } }),
        React.createElement("script", { 
            // env переменные доступные на клиенте
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: `
            window.env = {
              ${availableEnvKeys
                    .filter(key => env[key])
                    .map(key => `'${key}': '${env[key]}'`)
                    .join(',')}
            };
          `,
            } }),
        React.createElement("script", { 
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: `window.ssrData = ${serialize(ssrData)};`,
            } }),
        scripts.map(script => (React.createElement("script", { key: script, src: script }))))));
//# sourceMappingURL=index.js.map