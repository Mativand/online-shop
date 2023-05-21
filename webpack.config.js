const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const ESLintPlugin = require('eslint-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ]
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.tsx'
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
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
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
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions('@babel/preset-react')
                    },
                    'ts-loader'
                ],
            }
        ],
    }
}