const path = require('path');

module.exports = {
    modules: [
        "node_modules",
        path.resolve(__dirname, '../../../..')
    ],
    extensions: ['.js', '.json', '.css', 'less'],
    alias: {
        FayAntd: path.resolve(__dirname, '../../../lib/antd/style/'),
        FayQuery: path.resolve(__dirname, '../../../lib/query/'),
        FayApi: path.resolve(__dirname, '../../../api/'),
        FayError: path.resolve(__dirname, '../../../error/'),
        FayLogin: path.resolve(__dirname, '../../../login/'),
        FayCore: path.resolve(__dirname, '../../../'),
    }
};