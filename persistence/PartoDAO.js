const BD = require ('./BD')
const mysql = require('mysql2')

class PartoDAO {
    constructor(db) {
        this.banco = new BD();
        this.db = banco.db
    }

    async getPartos() {
        let query = "SELECT * FROM Parto";
          return this.db.doQuery(query)
    }

    async getPartosByBrinco(brinco) {
      let query = "SELECT * FROM Parto WHERE brinco = ?";
      return this.db.doQueryParams(query, brinco);
    }    
}

module.exports = PartoDAO