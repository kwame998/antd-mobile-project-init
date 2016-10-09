const path = require('path');
const nodeModulesPath=path.resolve(__dirname, 'node_modules');
const webpack = require("webpack");
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWepackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PageModel = path.join(__dirname, './src');
module.exports = {
    cache: true,
    entry: {
        'main':[path.resolve(__dirname, 'src/main.js')],
        'vendor':["react", "react-dom",'react-router','react-redux','jquery']
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?prefix=font/[name].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=10000&name=img/[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015'],
                    //支持es6 static
                    plugins: ["transform-class-properties",["import", {
                        style: 'css',
                        libraryName: 'antd-mobile',
                    }]],
                    env: {
                        production: {
                            presets: ["react-optimize"]
                        }
                    }
                },
                include: [PageModel]
            }

        ]
    },
    plugins: [
        //打包分析
        new Visualizer(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            fecha:'fecha',
        }),
        new HtmlWepackPlugin({
            template: __dirname + '/templet.html',
            filename: 'index.html',
            inject: true,
            chunks: ['main','vendor'],
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true   //删除空白符与换行符
            }
        }),
        new ExtractTextPlugin("css/styles.css", {allChunks: true})
    ]
};
