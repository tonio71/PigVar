const BD = require ('./BD')
const mysql = require('mysql2')

class ReprodutorDAO {
    constructor(db) {
        this.BD = new BD();
        this.db = this.BD.db
    }

    async getReprodutorBySexo(sexo) {
      let query = "SELECT * FROM reprodutor WHERE sexo = ?";
      return await this.BD.doQueryParams(query, sexo);
    }  

    async getReprodutorByBrinco(brinco) {
      let query = 'SELECT \
                    brinco, \
                    multiplicadora,\
                    genetica,\
                    DATE_FORMAT(data_nasc,"%Y-%m-%d") as data_nasc, \
                    peso_nasc,\
                    DATE_FORMAT(data_chegada,"%Y-%m-%d") as data_chegada, \
                    peso_chegada,\
                    sexo\
                  FROM `reprodutor`\
                  WHERE brinco=?';
      return await this.BD.doQueryParams(query, brinco);
    }  
    
    async getReprodutores() {
      let query = 'SELECT \
                      brinco, \
                      multiplicadora,\
                      genetica,\
                      DATE_FORMAT(data_nasc,"%d/%m/%Y") as data_nasc, \
                      peso_nasc,\
                      DATE_FORMAT(data_chegada,"%d/%m/%Y") as data_chegada, \
                      peso_chegada,\
                      sexo\
                    FROM `reprodutor`'
      try{
        var reprodutores = await this.BD.doQuery(query)
        return reprodutores
      }
      catch(erro){
        throw erro;
      }
    }

  async addAltReprodutor( novoReprodutor ){
    let query = "INSERT INTO `reprodutor` (brinco, multiplicadora, genetica, data_nasc, peso_nasc, data_chegada, peso_chegada, sexo) \
    VALUES (?,?,?, STR_TO_DATE(?,'%Y-%m-%d') ,?, STR_TO_DATE(?,'%Y-%m-%d') ,?,?) \
    ON DUPLICATE KEY UPDATE \
      multiplicadora=?, \
      genetica=?, \
      data_nasc= STR_TO_DATE(?,'%Y-%m-%d'), \
      peso_nasc=?, \
      data_chegada=STR_TO_DATE(?,'%Y-%m-%d'), \
      peso_chegada=?, \
      sexo=? ";
      var valores = [novoReprodutor.brinco,novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo, 
        novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo]
      return await this.BD.doQueryParams(query, valores);
  }

  async excReprodutor( brinco ){
    let query =  "DELETE FROM `reprodutor` WHERE brinco=?;"
    return await this.BD.doQueryParams(query, brinco);
  }

}

module.exports = ReprodutorDAO