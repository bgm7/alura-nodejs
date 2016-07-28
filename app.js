var app = require('./config/express')();
var porta = process.env.PORT || 3000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(porta, function(){
	console.log("rodando na porta: " + porta);
});
