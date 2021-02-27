const BD = require ('./BD')
const mysql = require('mysql2')

class PartoDAO {
  constructor(db) {
      this.BD = new BD();
      this.db = this.BD.db
  }

  async getParto( brinco_femea, ordem_paricao ) {
    let query = "SELECT * FROM parto WHERE brinco_femea = ? and ordem_paricao=?";
    return await this.BD.doQueryParams(query, [brinco_femea, ordem_paricao]);
  }  

  async getPartos() {
    var sql='SELECT id, brinco_femea, data_parto, DATE_FORMAT(data_parto,"%d/%m/%Y") as data_partoFormatado, galpao,sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
    var campos=''
    for(var i=1; i<=36;i++){
        campos=campos+ ', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
    }
    let query = sql+campos+' FROM `Parto` order by brinco_femea, data_parto'
    try{
      var partos = await this.BD.doQuery(query)
      return partos
    }
    catch(erro){
      throw erro;
    }
  }

  /* async getPartosByBrinco(brinco_femea) {
    let query = "SELECT * FROM parto WHERE brinco_femea = ?";
    return await this.BD.doQueryParams(query, [brinco_femea]);
  } */

  async getPartoById(id) {
    var query='SELECT id, brinco_femea, DATE_FORMAT(data_parto,"%Y-%m-%d") as data_parto, galpao,sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
    var campos=''
    for(var i=1; i<=36;i++){
        campos=campos+ ', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
    }
    query=query+campos+' FROM `Parto` WHERE id=?'
    
    return await this.BD.doQueryParams(query, [id]);
  }  
  
  async addAltParto( novoParto ){
    var sql='INSERT INTO `Parto` (id, brinco_femea, data_parto, galpao, sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
    var campos=''
    for(var i=1; i<=2;i++){
      campos=campos+', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
    }
    campos=campos+') VALUES (?' 
    var interrogacao =",?" 
    interrogacao = interrogacao.repeat(12)  // DEIXA 113 REETICOES PARA PEGAR TODOS OS CAMPOS
    sql = sql + campos + interrogacao + ') ON DUPLICATE KEY UPDATE \
      id=?,\
      brinco_femea=?,\
      data_parto=?,\
      galpao=?,\
      sala_maternidade=?,\
      peso_matriz_pre_parto=?,\
      peso_matriz_pos_parto=?'
    
    campos=''
    for(var i=1; i<=2;i++){
      campos=campos+', peso_nasc'+i+'=?, estado_nasc'+i+'=?, peso_desmame'+i+'=?'
    }
    let query =  sql + campos
    //var valores = [novoParto.id, novoParto.brinco_femea_old, novoParto._old, novoParto.galpao, novoParto.sala_maternidade, novoParto.peso_matriz_pre_parto, novoParto.peso_matriz_pos_parto,
    var valores = [novoParto.id,novoParto.brinco_femea_old, novoParto.data_parto_old, novoParto.galpao, novoParto.sala_maternidade, novoParto.peso_matriz_pre_parto, novoParto.peso_matriz_pos_parto,
                  novoParto.peso_nasc1, novoParto.estado_nasc1, novoParto.peso_desmame1, novoParto.peso_nasc2, novoParto.estado_nasc2, novoParto.peso_desmame2,
                  novoParto.id,novoParto.brinco_femea, novoParto.data_parto, novoParto.galpao, novoParto.sala_maternidade, novoParto.peso_matriz_pre_parto, novoParto.peso_matriz_pos_parto,
                  novoParto.peso_nasc1, novoParto.estado_nasc1, novoParto.peso_desmame1, novoParto.peso_nasc2, novoParto.estado_nasc2, novoParto.peso_desmame2]
                  return await this.BD.doQueryParams(query, valores);
  }

  async excParto( id ){
    let query =  "DELETE FROM `parto` WHERE id=?;"
    return await this.BD.doQueryParams(query, [id]);
  }
}

module.exports = PartoDAO