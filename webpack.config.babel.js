import { DefinePlugin } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

export default (env, options) => {
  const config = {
    entry: {
      app: './src/app.ts',
      vendors: ['phaser'],
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'babel-loader',
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },

    output: {
      filename: 'app.bundle.js',
      path: __dirname + '/public',
      chunkFilename: 'vendors.app.bundle.js',
    },

    mode: options.mode || 'development',

    devServer: {
      contentBase: __dirname + '/public',
      https: true,
    },

    plugins: [
      new DefinePlugin({
        CANVAS_RENDERER: JSON.stringify(true),
        WEBGL_RENDERER: JSON.stringify(true),
      }),
    ],

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            ecma: 6,
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  };

  if (config.mode === 'production') {
    config.performance = {
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000,
    };
  } else {
    config.devtool = 'inline-source-map';
  }

  return config;
};
