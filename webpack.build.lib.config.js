/**
 * Created by yeanzhi on 17/2/25.
 */
'use strict';
const {
    resolve, join
} = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = resolve(__dirname, 'node_modules');
var fs = require('fs');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => fs.statSync(join(srcpath, file)).isDirectory())
}

let entry = {};
getDirectories('./src-lib').forEach(item => {
    // entry[`${item}/style/index.css`] = `./src-lib/${item}/style/index.less`;
    entry[`${item}/style/index.css`] = `./src-lib/${item}/style/index.js`;
})
entry[`style/index.css`] = `./src-lib/style/index.less`;

module.exports = {
    entry: entry,
    output: {
        filename: '[name]',
        sourceMapFilename: '[file].map',
        path: resolve(__dirname, 'lib'),
        publicPath: '/lib'
    },
    // devtool: 'cheap-module-source-map',

    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            ['es2015', {
                                'modules': false
                            }], 'stage-0', 'react'
                        ],
                        'env': {},
                        'ignore': [
                            'node_modules/**',
                            'dist'
                        ],
                        'plugins': [
                            'transform-decorators-legacy'
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                globalVars: {
                                    project: 'mtui'
                                }
                            }
                        }
                    ]
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf|woff2)$/i,
                use: ['url-loader']
            }
        ]
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};
