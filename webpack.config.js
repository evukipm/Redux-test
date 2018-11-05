const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index.jsx')
    ],
    
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'REact redux demo',
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new webpack.EnvironmentPlugin({
            ...require('./config/' + (process.env.ENV || 'development'))
        })
    ],
    devServer: {
        host: '0.0.0.0',
        hot: true,
        port: 8081,
        inline: true,
        contentBase: path.join(__dirname, './src'),
        historyApiFallback: true
    }
};
