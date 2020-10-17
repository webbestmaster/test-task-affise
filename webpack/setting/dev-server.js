const path = require('path');

const {cwd, pathToDist, isBuildServer, webpackDevServerPort} = require('./../config');

const host = 'localhost';

module.exports.devServer = {
    host,
    port: webpackDevServerPort,
    contentBase: path.join(cwd, pathToDist),
    historyApiFallback: {
        disableDotRule: true,
    },
    writeToDisk: isBuildServer,
    // inline: false,
    // hot: true,
    // hotOnly: false,
    disableHostCheck: true,
};
