const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./helpers').resolve;

module.exports = {
    entry: {
        main: resolve('./angular/main.ts'),
        vendor: resolve('./angular/vendor.ts'),
        styles: resolve('./angular/styles.ts')
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [
                    'app',
                    'bootstrap',
                    'database',
                    'node_modules',
                    'public',
                    'resources',
                    'storage',
                    'tasks',
                    'tests',
                    'typings',
                    'vendor'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'raw!sass?sourceMap'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.md$/,
                loader: 'html!markdown'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['main', 'vendor'],
            filename: 'commons.chunk.js',
        })
    ]
};
