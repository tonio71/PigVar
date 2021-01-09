const config = require('../config/config.js')
const mysql = require('mysql2');
 
// create the connection to database

	const bd = mysql.createPool({
  host: config.database.host,
  port: config.database.port,
  database: config.database.name,
  user: config.database.user,
  password:config.database.password,
  waitForConnections: config.database.waitForConnections,
  connectionLimit: config.database.connectionLimit,
  queueLimit: config.database.queueLimit
});
console.log("aconteceu: ", bd)
	if (!bd){
		console.log("Falha na conexão: "+e)
	}
	else{
		console.log("BD conectado")
	}
	
	
module.exports = bd




