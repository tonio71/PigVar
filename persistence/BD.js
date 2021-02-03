const config = require('../config/config.js')
const mysql = require('mysql2');

class BD{
	constructor (){
		// create the connection to database
			this.db = mysql.createPool({
			host: config.database.host,
			port: config.database.port,
			database: config.database.name,
			user: config.database.user,
			password: config.database.password,
			waitForConnections: config.database.waitForConnections,
			connectionLimit: config.database.connectionLimit,
			queueLimit: config.database.queueLimit
		});	
		if (!this.db){
		console.log("Falha na conexão: "+e)
		}
		else{
		console.log("BD conectado")
		}
	}

	// CORE FUNCTIONS DON'T TOUCH
    async doQuery(queryToDo) {
        let pro = new Promise((resolve,reject) => {
            let query = queryToDo;
            this.db.query(query, function (erro, result) {
                if (erro){ console.log('jogando erro dentr do BD') 
                  throw erro;
                }else{ 
                  resolve(result);
                }
            });
        })
        return  pro.then((val) => { return val; })
    }

    async doQueryParams(queryToDo, array) {
      let pro = new Promise((resolve,reject) => {
        let query = queryToDo;
        this.db.query(query, array, function (erro, result) {
            if (erro) throw erro;
            resolve(result);
        });
      })
      return pro.then((val) => {
        return val;
      })
    }
}
	
module.exports = BD