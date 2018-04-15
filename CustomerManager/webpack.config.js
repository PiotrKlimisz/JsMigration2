const path = require('path');

//webpack.config.js
module.exports = {
    entry: './Scripts/main.js',
    output: {
        path:  path.resolve(__dirname, './app/customersApp/dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}