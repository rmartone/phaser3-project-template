import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export default (_env, options) => ({
  entry: {
    app: './src/index.ts',
    vendors: ['phaser'],
  },

  mode: options.mode,

  devtool: options.mode === 'production' ? false : 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'vendors.js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: true,
    }),
    new CopyPlugin([{ from: 'assets/', to: '.' }]),
  ],

  performance: {
    maxEntrypointSize: 1200000,
    maxAssetSize: 1200000,
  },

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
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
