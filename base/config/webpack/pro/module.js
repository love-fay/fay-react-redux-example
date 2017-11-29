const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixerFromPostcss = require('autoprefixer');
const cssnanoFromPostcss = require('cssnano');

module.exports = {
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                autoprefixerFromPostcss(),
                                cssnanoFromPostcss(),
                            ],
                        },
                    },
                ],
            }),
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react',
                        ['env',{
                            'targets': {
                                'browsers': ['last 2 versions', 'ie >= 9'],
                                'uglify': true
                            },
                            'modules': false,
                            'loose': true,
                            'useBuiltIns': true,
                        },
                        ]
                    ],
                    plugins: [
                        'babel-plugin-transform-class-properties',
                        'babel-plugin-syntax-dynamic-import',
                        [
                            'babel-plugin-transform-runtime', {
                            'helpers': true,
                            'polyfill': true,
                            'regenerator': true,
                        },
                        ],
                        [
                            'babel-plugin-transform-object-rest-spread', {
                            'useBuiltIns': true
                        },
                        ],
                        [
                            'import',
                            {
                                "libraryName": "antd",
                                "style": true,
                            }
                        ]
                    ],
                },
            },
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                }],
                fallback: 'style-loader',
            }),
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images',
                },
            },
        },
        {
            test: /\.gz$/,
            enforce: 'pre',
            use: 'gzip-loader',
        }
    ],
};