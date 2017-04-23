'use strict';
const {resolve, join} = require('path');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    entry: {
        'demo': ['react-hot-loader/patch', 'webpack-dev-server/client?http://127.0.0.1:10006/', 'webpack/hot/only-dev-server', './example/index.js'],
        // vendor:['react','react-dom','babel-polyfill','rabjs', 'antd']
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        path: resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: [
            path.join(__dirname, 'demo'),
            path.join(__dirname, 'dist'),
            path.join(__dirname, 'example')
        ],
        compress: true,
        port: 10006,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        publicPath: '/dist/',
        headers: {
            'XM-Component-Server': 'webpack-dev-server@2.0.0'
        },
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/.*$/,
                    to: '/dist/index.html'
                }
            ],
            verbose: true
        },
        watchContentBase: true
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['happypack/loader?id=js'],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: ['happypack/loader?id=less']
            }, {
                test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf|woff2)$/i,
                use: ['url-loader']
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
        lodash: '_'
    },
    resolve: {
        alias: {
            'mtui-d': join(__dirname, './lib')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({title: 'test', template: "example/tpl.ejs", inject: false}),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./example/dll/common-manifest.json')
        }),
        new HappyPack({
            id: 'js',
            threads: 2,
            tempDir: './node_modules/.happypack/',
            loaders: ['babel-loader']
        }),
        new HappyPack({
            id: 'less',
            threads: 2,
            tempDir: './node_modules/.happypack/',
            loaders: ['style-loader',
                'css-loader', 'postcss-loader', 'less-loader']
        }),
    ]
};
