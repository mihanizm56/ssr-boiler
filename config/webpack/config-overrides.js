const os = require('os');
const CompressionPlugin = require('compression-webpack-plugin');

export const getCacheAndThreadLoaderConfig = (isProduction) =>
  isProduction
    ? [
        {
          loader: 'thread-loader',
          options: {
            workers: os.cpus().length - 1,
            poolRespawn: false,
            workerParallelJobs: 50,
            poolParallelJobs: 200,
          },
        },
      ]
    : [
        { loader: 'cache-loader' },
        {
          loader: 'thread-loader',
          options: {
            workers: os.cpus().length - 1,
            poolRespawn: false,
            workerParallelJobs: 50,
            poolParallelJobs: 200,
          },
        },
      ];

module.exports = ([clientConfig, serverConfig]) => {
  const isProduction = clientConfig.mode === 'production';

  clientConfig.plugins.push({
    test: /\.[jt]s$/,
    exclude: /node_modules/,
    use: [
      ...getCacheAndThreadLoaderConfig(isProduction),
      {
        loader: '@mihanizm56/webpack-magic-redux-modules',
      },
    ],
  });
  serverConfig.plugins.push({
    test: /\.[jt]s$/,
    exclude: /node_modules/,
    use: [
      ...getCacheAndThreadLoaderConfig(isProduction),
      {
        loader: '@mihanizm56/webpack-magic-redux-modules',
      },
    ],
  });

  if (isProduction) {
    clientConfig.plugins.push(
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.js$|\.css$|\.json$|\.html$|\.ico$/,
        compressionOptions: {
          level: 11,
        },
      }),
    );
    clientConfig.rules.push(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.json$|\.html$|\.ico$/,
      }),
    );
  }

  return [clientConfig, serverConfig];
};
