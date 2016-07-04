var results = require('../../mock/produto/produtos.json');

function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
		callback(results);
}

module.exports = function(){
	return ProdutosDAO;
}