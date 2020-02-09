const path = require('path');
const webpack = require('webpack');
// const fs = require('fs');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

module.exports = {

  externals: {
    paths: PATHS
  },
  entry: {
    "ui-kit": `${PATHS.src}/pages/ui-kit/ui-kit.js`,

  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.pug$/,
      oneOf: [{
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },

        {
          use: {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        }
      ]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      exclude: /(img)/,
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts',
        publicPath: '../assets/fonts/'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      exclude: /(fonts)/,
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/'
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: `./postcss.config.js`
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: `./postcss.config.js`
            }
          }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      'vue$': 'vue/dist/vue.js',
    }
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin([{
        from: `${PATHS.src}/${PATHS.assets}img`,
        to: `${PATHS.assets}img`
      },
      {
        from: `${PATHS.src}/static`,
        to: ''
      },
    ]),

    new HtmlWebpackPlugin({
      template: './src/pages/ui-kit/ui-kit.pug',
      filename: 'ui-kit.html',
      inject: true,
      collapseWhitespace: true,

    }),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/form-elements/form-elements.pug',
    //   filename: 'home.html',
    //   inject: true,
    //   collapseWhitespace: false
    // }),
  ],
}
