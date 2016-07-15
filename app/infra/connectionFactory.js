var mysql = require('mysql');

var connectMYSQL = function(){
	var env = process.env.NODE_ENV || 'development';

	if (env === 'development')
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'study',
			database: 'casadocodigo_nodejs'
		});

	if (env === 'test')
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'study',
			database: 'casadocodigo_nodejs_test'
		});

	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'study',
			database: 'casadocodigo_nodejs_test'
	});
};

module.exports = function(){
	return connectMYSQL;
}