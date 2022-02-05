require('colors');
console.log('Starting the socks5 server...'.yellow);
const node_socks5_server = require('node-socks5-server');
const { port } = require('./config.json');
const socks5server = node_socks5_server.createServer();
socks5server.once('listening', () => {
    console.log(`The socks5 proxy server is now listening on port "${port}"!`.green);
    socks5server.on('connection', socket => {
        console.log(
            `[${new Date().toLocaleString().green}] A connection was established! Information:\n` +
            `   Local:\n` +
            `       IP: ${socket.localAddress.cyan}\n` +
            `       Port: ${socket.localPort.toString().cyan}\n` +
            `   Remote:\n` +
            `       IP: ${socket.remoteAddress.cyan} (${socket.remoteFamily.cyan})\n` +
            `       Port: ${socket.remotePort.toString().cyan}`
        );
    });
});
socks5server.listen(parseInt(port));