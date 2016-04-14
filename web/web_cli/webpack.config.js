var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Clean = require("clean-webpack-plugin");
var git = require('git-rev-sync');


var plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        APP_VERSION: JSON.stringify(git.tag())
    })
];
plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}));
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new webpack.NoErrorsPlugin());
module.exports = function(){
    var outputPath = path.resolve(__dirname, "./assets");
    var config_= {
        entry: {
            app:[
                "webpack-dev-server/client?http://localhost:8000",
                "webpack/hot/only-dev-server",
                path.resolve(__dirname, "./app.jsx")
            ]
        },
        output: {
            path:outputPath,
            filename: "bundle.js",
            pathinfo:true
        },
        devtool:  "source-map",
        module: {
                loaders: [
                    {test: /\.css$/, loader: "style!css"},
                    {test: /\.jsx$/, loader: "babel-loader"},
                    //!jsx-loader!harmony
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'react-hot!jsx-loader?harmony'
                    }
                ]
        },
        resolve: {
            //root: [path.resolve(__dirname, "./")]
            extensions: ["", ".js", ".jsx", ".coffee", ".json"],
            modulesDirectories: ["node_modules"]
        },
        plugins: plugins,
        //resolveLoader: {
        //root: load_root,
        //}
        root: outputPath,
    };
    var config =config_;
    return config;
}