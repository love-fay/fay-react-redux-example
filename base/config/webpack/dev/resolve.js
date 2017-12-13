const path = require('path');

module.exports = {
    modules: [
        "node_modules",
        path.resolve(__dirname, '../../../..')
    ],
    extensions: ['.js', '.json', '.css', 'less'],
    alias: {
        'fay-antd': path.resolve(__dirname, '../../../../node_local_modules/fay-antd/style/'),
        'fay-query': path.resolve(__dirname, '../../../../node_local_modules/fay-query/'),
        'fay-base': path.resolve(__dirname, '../../../')
    }
};