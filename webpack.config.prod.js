const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    
    entry: [
        path.join(__dirname, 'src', 'index.jsx'),
        path.join(__dirname, 'src', 'sass', 'index.scss')
    ],
    
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                use: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },
    
    plugins: [
        new webpack.EnvironmentPlugin({
            ...require('./config/' + (process.env.ENV || 'staging'))
        }),
        new ExtractTextPlugin({
            filename: 'bundle.min.css',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin(path.join(__dirname, 'build', 'styles.css')),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Demo react redux',
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: { except: ['$super', '$', 'exports', 'require'] }
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    
    target: 'web',    
    devServer: {
        host: '0.0.0.0',
        hot: true,
        port: 8081,
        inline: true,
        contentBase: path.join(__dirname, './build'),
        historyApiFallback: true
    }
};
