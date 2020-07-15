const detectPort = require('detect-port');
const opn = require('opn');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const localtunnel = require('localtunnel');
// const serveo = require('../../script/serveo');
const config = require('../config');
// const subdomain = require('../../../package.json').name;
// const nodeCleanup = require('node-cleanup');

const { DEVELOPMENT } = config.buildTypes;

module.exports = detectPort(config.devServer.port).then(port => {
  const devWebpackConfig = require('./webpack.conf.base')(DEVELOPMENT);

  process.env.PORT = port;
  devWebpackConfig.devServer.port = port;

  if (config.devServer.autoOpenBrowser) {
    opn(`${config.devServer.useHttps ? 'https' : 'http'}://localhost:${port}`).catch(() => {});
  }

  // localtunnel(port, { subdomain }, (error, tunnel) => {
  //   if (error) return console.error(error);
  //   console.log(`Tunnel open: ${tunnel.url} -> http://localhost:${port}`);
  //   nodeCleanup(() => tunnel.close());
  // });

  // serveo(port, { subdomain }).then(url => {
  //  console.log(`Tunnel open: ${url} -> http://localhost:${port}`);
  // });

  // note: we inject this plugin here because we need access to the port
  devWebpackConfig.plugins.push(
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            config.devServer.useHttps ? 'https' : 'http'
          }://localhost:${port}`,
        ],
      },
    }),
  );

  return devWebpackConfig;
});
