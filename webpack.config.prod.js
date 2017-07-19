const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const APP_PATH = path.resolve(__dirname, './app/client/App.jsx');
const BUILD_PATH = path.resolve(__dirname, './build/client');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将所有CSS文件打包
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux'],
  },

  output: {
    path: BUILD_PATH,
    filename: 'client.bundle.js',
    chunkFilename: 'chunk.bundle.js', // 代码分割
    // publicPath: '/JdBus/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['jsnext:main', 'main'], // 优先使用外加包的es6版，如redux
    modules: [path.resolve(__dirname, 'node_modules')], // 更快的构建
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'app'),
        use: [
          'babel-loader?cacheDirectory',
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // 开启CSS Module
              localIdentName: '[name]__[local]-[hash:base64:5]',
              minimize: true, // 压缩
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() { // 这里配置postcss的插件
                return [autoprefixer];
              },
            },
          },
        ],
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
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),
    // new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({ // 多页应用拆分打包文件，出现共用文件则打包进common.js中
      name: 'commons',
      filename: 'common-[name]-[hash:8].js',
      minChunks: 2,
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, 'build'),
    //     to: path.resolve(__dirname, '../../public/JdBus'),
    //   },
    // ]),
  ],
};
