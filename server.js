var socket_io = require('socket.io');

module.exports = exports = {};

exports.getSocketIo = (server)=>{
	var io = socket_io.listen(server);
	io.sockets.on('connection',(socket)=>{
        console.log('a user connect');
        socket.on('login',(info)=>{
            socket.broadcast.emit('tellPeopleOnline',info);
        })

		/* socket.on('disconnect',(info)=>{
            console.log(socket);
            socket.broadcast.emit('tellPeople',info);
		}) */

		socket.on('sendMessage',(res)=>{
			socket.broadcast.emit('broadcastMessage',res);
		})
	})

}