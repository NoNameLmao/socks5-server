require('colors')

console.log('Starting the socks5 server...'.yellow)
const socks5 = require('node-socks5-server').createServer()
const { port } = require('./config.json')
socks5.once('listening', () => {
    console.log(`The socks5 proxy server is now listening on port "${port}"!`.green)
    socks5.on('connection', socket => {
        console.log(
            `[${new Date().toLocaleString().green}] A connection was established! Information:\n` +
            `   Local:\n` +
            `       IP: ${socket.localAddress.cyan}\n` +
            `       Port: ${socket.localPort.toString().cyan}\n` +
            `   Remote:\n` +
            `       IP: ${socket.remoteAddress.cyan} (${socket.remoteFamily.cyan})\n` +
            `       Port: ${socket.remotePort.toString().cyan}`
        )
    })
})
socks5.listen(parseInt(port))
