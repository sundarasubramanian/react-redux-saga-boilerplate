module.exports = {
    entry: ['react-hot-loader/patch', './src'],//'./index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            { 
                test: /\.less$/,
                use: [ 
                  'style-loader',
                  'css-loader', 
                  'less-loader',
                ],
            },
            {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
        ]
    },
    devServer: {
        port: 3000
    },
    resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      url: require.resolve("url/")
    }
  }
};