const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSASS = new ExtractTextPlugin({
    filename: 'style.css'
});
const extractHTML = new HtmlWebpackPlugin({
    template: 'index.html'
});

module.exports = {
    entry: [
        'whatwg-fetch', './src/index.jsx'
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/dist',
        filename: 'index.js'
    },
    module:{
        loaders:[{
            test:/\.(js|jsx)$/, 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015', 'stage-1', 'react']
            }
        },{
            test: /\.scss$/,
            use: extractSASS.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },{
            test: /\.html$/,
            use: ['html-loader']
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader?name=assets/[name].[ext]'
        }]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        inline:true,
        port:3000
    },
    plugins: [
        extractSASS,
        extractHTML,
    ]
}