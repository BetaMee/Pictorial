const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const APP_PATH = path.resolve(__dirname, './app/client/App.jsx');
const BUILD_PATH = path.resolve(__dirname, './build/client');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将所有CSS文件打包
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    APP_PATH,
  ],

  output: {
    path: BUILD_PATH,
    filename: 'client.bundle.js',
    chunkFilename: 'chunk.bundle.js', // 代码分割
    // publicPath: '/JdBus/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true, // 开启CSS Module
      //           localIdentName: '[name]__[local]-[hash:base64:5]',
      //         },
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           plugins() { // 这里配置postcss的插件
      //             return [autoprefixer];
      //           },
      //         },
      //       },
      //     ],
      //   }),
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'isomorphic-style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true, // 开启CSS Module
      //         localIdentName: '[name]__[local]-[hash:base64:5]',
      //       },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins() { // 这里配置postcss的插件
      //           return [autoprefixer];
      //         },
      //       },
      //     },
      //   ],
      // },
      // { // 处理图片
      //   test: /\.(png|jpg|gif|webp')$/,
      //   // include:path.resolve(__dirname,'/client/assets'),
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       // 这个是输出的图片文件，跟output一致,生成的是bundleImg目录下的图片文件
      //       name: 'bundleImg/[hash:8].[name].[ext]',
      //     },
      //   }],
      // },

      // { // 处理文字
      //   test: /\.(woff|ttf|svg|eot|woff2)$/,
      //   // include:path.resolve(__dirname,'/client/assets'),
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: 'bundleFonts/[hash:8]-[name].[ext]',
      //     },
      //   }],
      // },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        WEBPACK: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    // new ExtractTextPlugin('bundle.css'),
    // new webpack.optimize.CommonsChunkPlugin({ // 拆分打包文件，出现共用文件则打包进common.js中
    //   name: 'commons',
    //   filename: 'commons.js',
    //   minChunks: 2,
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, 'build'),
    //     to: path.resolve(__dirname, '../../public/JdBus'),
    //   },
    // ]),
  ],
};
