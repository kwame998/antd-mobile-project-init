const path = require('path');
const nodeModulesPath=path.resolve(__dirname, 'node_modules');
const pxtorem = require('postcss-pxtorem');
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
       filename: "js/[name].[hash].js"
    },
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer'),
            pxtorem({
                rootValue: 100,
                propWhiteList: [],
            })
        ];
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=font/[name].[hash].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=10000&name=img/[name].[hash].[ext]'
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
            $: "jquery"
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
        new ExtractTextPlugin("css/styles.[contenthash].css")
    ]
};
