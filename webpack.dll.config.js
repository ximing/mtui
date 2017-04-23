/**
 * Created by yeanzhi on 16/12/13.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        common:['react','react-dom','babel-polyfill','rabjs']
    },
    output: {
        path: path.join(__dirname, './dist', 'example'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './dist', 'example', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
};
