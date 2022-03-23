const socketController = (socket) => {
        console.log('cliente conectado', socket.id);
//desconectar el cliente
        socket.on('disconnect', () => {
            console.log('Cliente desconectado', socket.id);
        }) 
//emitir el mensaje
        socket.on('enviar-mensaje', (payload, callback) => {
            const id = 123;
            callback({ id, fecha: new Date().getTime() });
            socket.broadcast.emit('enviar-mensaje',payload)
        })
}

module.exports = {
    socketController
}