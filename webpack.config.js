const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './game/main.js',
    output: {
      path: __dirname + '/output',
      filename: 'bundle.js'
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
    plugins: [new HtmlWebpackPlugin({ template: './game/index.html'})],
    devServer:{
        contentBase: './output'
    }
   };