const WebSocket = require('ws');

const PORT = 4204

const wsServer = new WebSocket.Server({
	port: PORT
})

wsServer.on('connection', function (socket){
	console.log("A client just connected");

	socket.on('message', function (msg){
		console.log("Recieved message from client: " + msg);
		wbServer.clients.forEach(function (client){
			client.send("Someone said " + msg);


		});
	});
});

;l7uconsole.log((new Date() + "Server is listening on port " + PORT));