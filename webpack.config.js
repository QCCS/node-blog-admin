const webpack = require("webpack");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
//z直接引入markdown文件
const marked = require("marked");
const renderer = new marked.Renderer();
//分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let env = process.env;
console.log(env.NODE_ENV)
let proxy = null;
let devtool = null;
// let proxyDev = {
//     '/api':{
//         target: "http://localhost:9313",
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: { '^/api' : '' }
//     },
//     '/admin':{
//         target: "http://localhost:9313",
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: { '^/admin' : '' }
//     }
// }
let proxyDev=[
    {
        context: [
            '/api', '/admin'
        ],
        target: 'http://localhost:9313',
        secure: false,
        changeOrigin: true
    }
]
let proxyProd = {
    '/api':{
        target: "http://localhost:9313",
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api' : '' }
    }
}
if(env.NODE_ENV==="dev"){
    proxy = proxyDev;
    devtool = "cheap-module-eval-source-map";
}else if(env.NODE_ENV==="prod"){
    proxy = proxyProd;
    devtool = "cheap-module-eval-source-map";
}
console.log(proxy)
module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    devServer: {
        contentBase: './src',//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        hot: true,
        port: 8085//更改端口号，默认8080
        ,proxy
    },
    devtool,//好几种模式
    mode:'development',
    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["react", "es2015", "stage-0"]}
                }],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',// 目标文件名,1.x 这个配置项为asset
            algorithm: 'gzip',// 使用gzip压缩
            test: /\.js$|\.html$/,
            threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
        }),
        new ExtractTextPlugin("index.css"),
        new copyWebpackPlugin([{
            from: __dirname + '/README.md',
            to: __dirname + '/docs/README.md',
        }]),
        new copyWebpackPlugin([{
            from: __dirname + '/README.md',
            to:'./docs' //打包到 dist 下面的public
        }]),

    ]
}
