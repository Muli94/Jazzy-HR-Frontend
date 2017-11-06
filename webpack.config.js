const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('./dist/style.css');

module.exports = {
    entry: {
        './dist/index.js': ['whatwg-fetch', './src/index.jsx'],
        './dist/style.css': './style/main.scss'
    },
    output:{
        path:__dirname,
        publicPath: '/',
        filename: '[name]'
    },
    watch: true,
    
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
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=100000',
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
    ]
}