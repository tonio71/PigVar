const BD = require ('./BD')
const mysql = require('mysql2')

class InseminacaoDAO {
    constructor(db) {
        this.banco = new BD();
        this.db = banco.db
    }

    async getInseminacoes() {
        let query = "SELECT * FROM Inseminacao";
          return this.db.doQuery(query)
    }

    async getInseminacoesByBrinco(brinco) {
      let query = "SELECT * FROM Inseminacao WHERE brinco = ?";
      return this.db.doQueryParams(query, brinco);
    }    
}

module.exports = InseminacaoDAO