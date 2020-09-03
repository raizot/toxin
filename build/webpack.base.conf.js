const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
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
    "home": `${PATHS.src}/pages/home/home.js`,
    "search-room": `${PATHS.src}/pages/search-room/search-room.js`,
    "room-details": `${PATHS.src}/pages/room-details/room-details.js`,
    "registration": `${PATHS.src}/pages/registration/registration.js`,
    "sign-in": `${PATHS.src}/pages/sign-in/sign-in.js`,
    "about-project": `${PATHS.src}/pages/about-project/about-project.js`,

  },
 
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist
    // or
    // path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          // chunks: 'all',
          // enforce: true,
        }
      }
    }
  },
  module: {
    rules: [
      {
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
           name: '[name].[ext]',
           outputPath: 'assets/img',
           publicPath: '../assets/img/',
           sourceMap: true
          }
    
    },
     {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './'
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
        },
        // {
        //   loader: 'url-loader',
        //   options:{
        //     path:`../assets/img/`
        //   }
        // },
        {
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
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/static`,
        to: ''
      },
       {
         from: `${PATHS.src}/assets/img`,
         to: `img`
       }
    ]),

    new HtmlWebpackPlugin({
      chunks: ['ui-kit'],
      template: './src/pages/ui-kit/ui-kit.pug',
      filename: 'ui-kit.html',
      inject: true,
      collapseWhitespace: true,
      
    }),
    new HtmlWebpackPlugin({
      chunks: ['ui-kit', 'home'],
      template: './src/pages/home/home.pug',
      filename: 'home.html',
      inject: true,
      collapseWhitespace: false,
      
    }),
    new HtmlWebpackPlugin({
      chunks: ['ui-kit', 'search-room'],
      template: './src/pages/search-room/search-room.pug',
      filename: 'search-room.html',
      inject: true,
      collapseWhitespace: false,
      
    }),
    new HtmlWebpackPlugin({
      chunks: ['ui-kit', 'room-details'],
      template: './src/pages/room-details/room-details.pug',
      filename: 'room-details.html',
      inject: true,
      collapseWhitespace: false,

    }),
    new HtmlWebpackPlugin({
      chunks: ['ui-kit', 'registration'],
      template: './src/pages/registration/registration.pug',
      filename: 'registration.html',
      inject: true,
      collapseWhitespace: false,

    }),
    new HtmlWebpackPlugin({
      chunks: ['ui-kit', 'sign-in'],
      template: './src/pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
      inject: true,
      collapseWhitespace: false,

    }),
      new HtmlWebpackPlugin({
        chunks: ['about-project'],
        template: './src/pages/about-project/about-project.pug',
        filename: 'about-project.html',
        inject: true,
        collapseWhitespace: false,

      }),
  ],
}
