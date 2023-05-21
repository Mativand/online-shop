const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

console.log(isDev)
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        compress: true, // enable gzip compression
        port: 9000, // port to run the server on
        hot: true, // enable hot module replacement
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', 'json', '.png', '.icon', '.sass', '.less', 'scss'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    }
}