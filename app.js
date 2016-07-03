var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);
var porta = process.env.PORT || 3000;


app.listen(porta, function(){
	console.log("rodando na porta: " + porta);
});
