const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    entry: './src/index.tsx',
    output:{
        filename: 'js/[name]_[hash:8].js',
        path: resolve(__dirname, 'dist')
    },
    cache: {
        type: 'filesystem'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.styl(us)?$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new CompressionWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: resolve(__dirname, './public/favicon.ico'),
            template: 'public/index.html'
        }),
        new ESLintPlugin()
    ],
    devServer: {
        // router when 404
        historyApiFallback: true,
        // gzip
        compress: true,
        // port
        port: 8070,
        // open bra
        open: true,
        // proxy
        proxy: {
            '/prod/fake-auth': {
                target: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
                changeOrigin: true,
            }
        }
    },
    resolve: {
        symlinks: false,
        extensions: ['.js', '.ts','.tsx', '.json'],
        alias: {
            '@': resolve(__dirname, './src'),
            '@views': resolve(__dirname, './src/views'),
            '@models': resolve(__dirname, './src/models'),
            '@components': resolve(__dirname, './src/components'),
            '@functional': resolve(__dirname, './src/components/functional'),
            '@application': resolve(__dirname, './src/components/application'),
            '@layout': resolve(__dirname, './src/components/layout'),
            '@api': resolve(__dirname, './src/api'),
            '@utils': resolve(__dirname, './src/utils')
        }
    }
});