import * as React from 'react';
import { availableEnvKeys } from '@/available-env-keys';
import { serialize } from '@/_utils/serialize';

export interface IProps extends React.Props<any> {
  req?: any;
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  styles?: string[];
  scripts?: string[];
  ssrData?: Record<string, any>;
  children?: string;
}

export const Html = ({
  title,
  description,
  keywords,
  canonical,
  ogDescription,
  ogUrl,
  ogImage,
  styles,
  scripts,
  ssrData,
  children,
}: IProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <meta
        content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0"
        name="viewport"
      />

      <title>{title}</title>

      {description && <meta content={description} name="description" />}
      {keywords && <meta content={keywords} name="keywords" />}
      {canonical && <link href={canonical} rel="canonical" />}

      {/* Мета теги Open Graph */}
      <meta content={title} property="og:title" />
      {ogDescription && (
        <meta content={description} property="og:description" />
      )}
      {ogUrl && <meta content={ogUrl} property="og:url" />}
      {ogImage && <meta content={ogImage} property="og:image" />}

      {styles.map((style) => (
        <link key={style} as="style" href={style} rel="preload" />
      ))}
      {scripts.map((script) => (
        <link key={script} as="script" href={script} rel="preload" />
      ))}
      <link href="/static/favicon.ico" rel="shortcut icon" type="image/png" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic-ext"
        rel="stylesheet"
      />
      {styles.map((style) => (
        <link key={style} rel="stylesheet" href={style} /> // eslint-disable-line
      ))}
    </head>
    <body>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: children }}
        id="app"
      />
      <script
        // env переменные доступные на клиенте
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.env = {
              ${availableEnvKeys
                .filter((key) => env[key])
                .map((key) => `'${key}': '${env[key]}'`)
                .join(',')}
            };
          `,
        }}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.ssrData = ${serialize(ssrData)};`,
        }}
      />
      {scripts.map((script) => (
        <script key={script} src={script} />
      ))}
    </body>
  </html>
);
