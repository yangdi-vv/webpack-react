const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    mode: "development",
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/i,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: "stylus-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'send-email',
            template: 'public/index.html'
        }),
        new ESLintPlugin()
    ],
    devServer: {
        //启动gzip压缩
        compress: true,
        //端口
        port: 8070,
        //自动打开默认浏览器
        open: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json']
    }
}