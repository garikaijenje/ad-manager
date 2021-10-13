const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
require('dotenv').config();

let baseUrl = []

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './react/App.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [

    // reloads browser when the watched files change
    new BrowserSyncPlugin({
      // use existing Apache virtual host
      // proxy: 'http://af-middleware.local/',
      proxy: process.env["app.baseURL"],
      // proxy: process.env.myURL,
      tunnel: true,
      // watch the built files and the index file
      files: ['public/*', 'react/*', 'public/index.php'],
      // prevent BrowserSync from reloading the page 
      // and let Webpack Dev Server take care of this 
      reload: false
    }),
    new ErrorOverlayPlugin()

  ],
  devtool: 'cheap-module-source-map', // 'eval' is not supported by error-overlay-webpack-plugin
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader', 'postcss-loader'],
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],

      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), //serve your static files from here
    watchContentBase: true, // initiate a page refresh if static content changes
    hot: true,
    inline: true,
    port: 3000, // port webpack-dev-server listens to, defaults to 8080
    overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: true, // defaults to false
      errors: true, // defaults to false
    },
  },
  mode: 'development'
}