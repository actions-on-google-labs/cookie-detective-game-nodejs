const cp = require('child_process');
const nodeCleanup = require('node-cleanup');

const serveo = (port = 3000, { subdomain }) =>
  new Promise((resolve, reject) => {
    const ssh = cp.spawn('ssh', ['-R', `${subdomain}:80:localhost:${port}`, 'serveo.net']);

    let lastError = '';

    nodeCleanup(() => ssh.kill());

    ssh.on('error', error => {
      reject(error);
    });

    ssh.stdout.on('data', data => {
      const url = data.toString('ascii').match(/https:\/\/[^\s]+/)[0];
      resolve(url);
    });

    ssh.stderr.on('data', data => {
      lastError = data.toString('ascii');
    });

    ssh.on('close', () => {
      console.error(`SSH tunnel error: ${lastError}`);
    });
  });

module.exports = serveo;
