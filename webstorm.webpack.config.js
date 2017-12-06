/**
 * 用于webstorm中对webpack一些配置的提示
 * Created by feichongzheng on 16/12/7.
 */
const path = require('path');

module.exports = {

    resolve: {
        modules: [
            "node_modules",
            __dirname,
        ],
        extensions: ['.js', '.json', '.css', 'less'],
        alias: {
            'FayAntd': path.resolve(__dirname, './base/lib/antd/style/'),
        }
    },
};
