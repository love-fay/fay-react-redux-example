/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const webpackModule = require('../base/config/webpack/dev/module');

module.exports = {

    entry: ['babel-polyfill', __dirname + '/app/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
    },
    externals:[
        require('webpack-require-http')
    ],

    module: webpackModule,

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.css', 'less'],
        alias: {
            FayAntd: path.resolve(__dirname, '../lib/antd/lib/'),
        }
    },

    plugins: [
        new CleanPlugin(['public'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/../assets', to: __dirname + '/public/assets'},
            {from: __dirname + '/../favicon.ico', to: __dirname + '/public/favicon.ico'},
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
            'target': {
                server: {
                    uums: JSON.stringify('http://127.0.0.1:8080/uums')
                }
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        host: "0.0.0.0",
        port: '8000',
        historyApiFallback: true,
        inline: true,
        hot: true,
        hotOnly: true,
    },
};