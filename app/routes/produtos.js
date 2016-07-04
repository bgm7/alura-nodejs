
var results = require('../../mock/produto/produtos.json');

module.exports = function(app){
	app.get('/produtos', function(req, res){
		res.render("produtos/lista", {lista:results});
	});
}