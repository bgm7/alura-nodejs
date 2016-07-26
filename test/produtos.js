var express = require('../config/express')();
var request	= require('supertest')(express);

describe('#ProdutosController', function(){

	beforeEach(function(done){
		var conn = express.infra.connectionFactory();
		conn.query('delete from produtos', function(ex, res){
			if (!ex)
				done();
		});		
	});

	it('#listagem json', function(next){
		
		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-type', /json/)
		.expect(200, next);

	});

	it('#listagem html', function(next){
		
		request.get('/produtos')
		.set('Accept', 'text/html')
		.expect('Content-type', /html/)
		.expect(200, next);

	});

	it('#cadastro de novo produto com dados invalidos', function(next){

		request.post('/produtos')
		.send({titulo:"",descricao:"so pra teste"})
		.expect(400, next);

	});

	it('#cadastro de novo produto com dados validos', function(next){

		request.post('/produtos')
		.send({titulo:"titulo teste",preco:124,descricao:"so pra teste"})
		.expect(302, next);

	});
});