const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  devServer: {
         contentBase: './dist',
         overlay: true,
       },
  entry: {
  index:'./src/index.js',
   }
  ,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
         rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'resolve-url-loader',
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          },
          {
            test: /\.pug$/,
            use: {
              loader: 'resolve-url-loader',
              loader: 'pug-loader',
              options: {
               pretty:true
              }
            }
          },
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
          },
           {
             test: /\.css$/,
             use: [MiniCssExtractPlugin.loader,
               'style-loader',                 
               'css-loader',
             ],
           },
           {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
              loader: "file-loader",
            }
                    ],
            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
            },

         ],
       },
      
          plugins: [
            // new CleanWebpackPlugin(),
             new MiniCssExtractPlugin({
              filename: 'css/[name].[hash].css',
            }),
            new HtmlWebpackPlugin({
              template: './src/pages/ui-kit/ui-kit.pug',
              filename: 'ui-kit.html',
              inject: true,
              collapseWhitespace:false
            }),
            new CopyPlugin([
              {
                from: 'src/components/**/img/*',
                to: 'assets/img/',
                flatten: true,
              
              },{
                from: 'src/assets/fonts/',
                to: 'assets/fonts/',
                flatten: true,
              },
              {
                from: 'src/assets/static/',
                to: 'assets/static/',
                flatten: true,
              },
            ]),
          ]   
};