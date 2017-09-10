var path = require('path')

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /.jsx$/, loader: 'babel-loader'}
        ]
    }
}