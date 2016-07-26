module.exports = function(app){

	app.get('/', function(req, res, next){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(errors, results){
			res.render('home/index', {livros:results});
		});
	
		connection.end();
	});
};
