var app = require('./config/express')();
var porta = process.env.PORT || 3000;


app.listen(porta, function(){
	console.log("rodando na porta: " + porta);
});
