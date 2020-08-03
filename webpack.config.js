const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './build/main.js',
    output: {
      path: __dirname + '/output',
      filename: 'webpack.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,         
                exclude: /node_modules/,        
                use: {          
                    loader: 'babel-loader'        
                }
            }
        ]
    }, 
    plugins: [new HtmlWebpackPlugin({ template: './build/index.html'})],
    devServer:{
        contentBase: './output'
    }
   };