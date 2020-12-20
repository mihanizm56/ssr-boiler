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
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0"
      />

      <title>{title}</title>

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Мета теги Open Graph */}
      <meta property="og:title" content={title} />
      {ogDescription && (
        <meta property="og:description" content={description} />
      )}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {styles.map(style => (
        <link key={style} rel="preload" href={style} as="style" />
      ))}
      {scripts.map(script => (
        <link key={script} rel="preload" href={script} as="script" />
      ))}
      <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic-ext"
        rel="stylesheet"
      />
      {styles.map(style => (
        <link key={style} rel="stylesheet" href={style} /> // eslint-disable-line
      ))}
    </head>
    <body>
      <div
        id="app"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: children }}
      />
      <script
        // env переменные доступные на клиенте
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.env = {
              ${availableEnvKeys
                .filter(key => env[key])
                .map(key => `'${key}': '${env[key]}'`)
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
      {scripts.map(script => (
        <script key={script} src={script} />
      ))}
    </body>
  </html>
);
