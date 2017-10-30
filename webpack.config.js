module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output:{
        path:__dirname,
        publicPath: '/',
        filename: 'dist/index.js'
    },
    module:{
        loaders:[{
            test:/\.(js|jsx)$/, exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015', 'stage-1', 'react']
            }
        }]
    },
    devServer:{
        inline:true,
        port:3000
    }

}