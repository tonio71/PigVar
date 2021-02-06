const BD = require ('../persistence/BD')
const mysql = require('mysql2')

class InseminacaoDAO {
    constructor(db) {
      this.BD = new BD();
      this.db = this.BD.db
    }

    async getInseminacoes() {
        let query = 'SELECT \
                      brinco_femea, \
                      brinco_macho,\
                      DATE_FORMAT(data_inseminacao,"%d/%m/%Y") as data_inseminacao \
                    FROM `inseminacao`';
        return await this.BD.doQuery(query)
    }

    async getInseminacao(brinco_femea, brinco_macho, data_inseminacao) {
      let query = 'SELECT \
                    brinco_femea, \
                    brinco_macho, \
                    DATE_FORMAT(data_inseminacao,"%Y-%m-%d") as data_inseminacao \
                  FROM `inseminacao` \
                  WHERE brinco_femea=? and \
                      brinco_macho=? and \
                      data_inseminacao=?';
      return await this.BD.doQueryParams(query, [brinco_femea, brinco_macho, data_inseminacao]);
    }

    async addAltInseminacao(novoInseminacao){
      let query = "INSERT INTO `inseminacao` (brinco_femea, brinco_macho, data_inseminacao) \
                  VALUES (?,?,?) \
                  ON DUPLICATE KEY UPDATE \
                    brinco_femea=?, \
                    brinco_macho=?, \
                    data_inseminacao=?";
      var valores = [novoInseminacao.brinco_femea_old,novoInseminacao.brinco_macho_old,novoInseminacao.data_inseminacao_old, 
                    novoInseminacao.brinco_femea,novoInseminacao.brinco_macho,novoInseminacao.data_inseminacao]
      return await this.BD.doQueryParams(query, valores);
    }

    async excInseminacao (brinco_femea, brinco_macho, data_inseminacao){
      let query = 'DELETE FROM `inseminacao` \
                          WHERE brinco_femea=? and\
                                brinco_macho=? and\
                                data_inseminacao=?'
      return await this.BD.doQueryParams(query, [brinco_femea, brinco_macho, data_inseminacao]);
    }
}

module.exports = InseminacaoDAO