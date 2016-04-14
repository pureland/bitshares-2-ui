var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config")();
var compiler = webpack(config);
compiler.apply();
new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    stats: {colors: true},
    port: 8000
}).listen(8000, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at 0.0.0.0:8080');
});
