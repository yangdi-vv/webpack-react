const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output:{
        path: resolve(__dirname, 'dist')
    },
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
                test: /\.styl(us)?$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
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
        open: true,
        // 代理设置
        proxy: {
            '/prod/fake-auth': {
                target: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
                changeOrigin: true,
            }
        }
    },
    resolve: {
        extensions: ['.js', '.ts','.tsx', '.json'],
        alias: {
            '@': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@application': resolve(__dirname, './src/components/application'),
            '@layout': resolve(__dirname, './src/components/layout')
        }
    }
}