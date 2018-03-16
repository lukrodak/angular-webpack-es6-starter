const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const NgrockWebpackPlugin = require('ngrock-webpack-plugin');
// var webpackConfig = {
//     entry: 'index.js',
//     output: {
//         path: __dirname + '/dist',
//         filename: 'index_bundle.js'
//     },
//     devServer: {
//         hot: true,
//         inline: true,
//         headers: {'Access-Control-Allow-Origin': '*'},
//         historyApiFallback: {
//             index: 'http://localhost:8080/index.html'
//         }
//     },
//     plugins: [new NgrockWebpackPlugin()]
// };
module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            path.join(__dirname, 'app', 'app.js')
        ]
    },
    output: {
        filename: '[name]bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'ng-annotate!babel?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'app')) === -1;
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            hash: true
        })
    ]
};
