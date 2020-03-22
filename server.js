import { listen } from 'socket.io';

export default exports = {};

export function getSocketIo(server){
	var io = listen(server);
	io.sockets.on('connection',(socket)=>{
        console.log('a user connect');
        socket.on('login',(info)=>{
            socket.broadcast.emit('tellPeopleOnline',info);
        })

		socket.on('disconnect',(info)=>{
            console.log('1212')
            console.log(socket);
            //socket.broadcast.emit('tellPeople',info);
		})

		socket.on('chat message',(res)=>{
			console.log('message:'+res);
			io.emit('return message',res);
		})

		socket.on('click',(res)=>{
			console.log(res);
		}) 
	})

}