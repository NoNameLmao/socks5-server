require('colors');
console.log('Starting the socks5 server...'.yellow);
const node_socks5_server = require('node-socks5-server');
const socks5server = node_socks5_server.createServer();
const { port } = require('./config.json');
socks5server.listen(parseInt(port));
console.log(`The socks5 proxy server is now listening on port "${port}"!`.green);