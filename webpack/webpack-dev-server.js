var Express = require('express');
var webpack = require('webpack');
var path = require('path');
//var config = require('../src/config');
var webpackConfig = require('./dev.config');
var compiler = webpack(webpackConfig);

var host =  'localhost';
var port =  3001;
var serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});
app.get('/api', function (req, res) {
  res.json({
    name: 'server name',
    time: new Date().getTime(),
    info: 'this is time server'
  })
});
app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});
