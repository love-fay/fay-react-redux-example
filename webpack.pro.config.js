/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpackModule = require('./base/config/webpack/pro/module');

module.exports = {

    entry: ['babel-polyfill', __dirname + '/platform/app/index.js'],
    output: {
        path: __dirname + '/dist/pro',
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
    },
    module: webpackModule,

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'platform/app')
        ],
        extensions: ['.js', '.json', '.css', 'less'],
        alias: {
            FayAntd: path.resolve(__dirname, 'lib/antd/lib/'),
        }
    },

    plugins: [
        new CleanPlugin(['dist/pro'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
            'target': {
                server: {
                    uums: JSON.stringify('http://192.168.210.192:7000/uums')
                }
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/platform/app/index.html',
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: ['Uc','App']
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {from: __dirname + '/assets', to: __dirname + '/dist/pro/assets'},
            {from: __dirname + '/favicon.ico', to: __dirname + '/dist/pro/favicon.ico'},
        ]),
    ],
};
