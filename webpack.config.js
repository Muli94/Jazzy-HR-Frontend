const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('./dist/style.css');

module.exports = {
    entry: [
        './src/index.jsx',
        './style/main.scss'
    ],
    output:{
        path:__dirname,
        publicPath: '/',
        filename: 'dist/index.js'
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