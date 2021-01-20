const Banco = require ('./BD')
const mysql = require('mysql2');

  Banco.query(
		'SELECT * FROM `inseminacao`',
		[],
		function(err, results, fields) {
			if(!err){
				console.log("RESULTADOS: ",results); // results contains rows returned by server
			}
			else{
				console.log("Erro: ", err);
			}
		}
	);

// module.exports = Inseminacao