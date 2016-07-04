
module.exports = function(app){
	app.get('/produtos', function(req, res){
		var produtosDAO = new app.infra.ProdutosDAO();

		produtosDAO.lista(function(results){
			res.render("produtos/lista", {lista:results});
		});
	});
}