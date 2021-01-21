const Banco = require ('../models/BD')
const mysql = require('mysql2')

class PartoController {

	tabelaParto(req,res){
        var sql='SELECT brinco_femea, DATE_FORMAT(data_parto,"%d/%m/%Y") as data_parto, ordem_paricao, galpao,sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
        var campos=''
        for(var i=1; i<=36;i++){
            campos=campos+ ', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
        }
        sql=sql+campos+' FROM `Parto`'
       
		Banco.execute(
			sql,
			[],

			function(err, partos, fields) {
				if(!err){
					for (var i = 0; i < partos.length; i++) {
                        partos[i].data_inseminacaoLink = 
                                (partos[i].data_parto).substr(6, 4)+'-'
                                + (partos[i].data_parto).substr(3, 2)+'-'
                                + (partos[i].data_parto).substr(0, 2)
                    } 
					res.render('Parto/tabelaParto', {partos: partos})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem da Tabela de Partos!!!')
					res.redirect('/')
				}
			}
		);
    }

    formCadParto ( req , res ){
		console.log('cade o form pato????')
		res.render('Parto/formAddAltParto')
    }

	addAltParto = ( req , res ) => {
		var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoParto(req)
       
        if(erros.length > 0){
            res.render('Parto/formAddAltParto', {Parto:req.body, erros : erros})
        }
        else{
			var novoParto = {
				brinco_femea: req.body.brinco_femea,
				data_parto: req.body.data_parto,
				ordem_paricao: req.body.ordem_paricao,
				galpao: req.body.galpao,
				sala_maternidade: req.body.sala_maternidade,
				peso_matriz_pre_parto: parseFloat(req.body.peso_matriz_pre_parto),
				peso_matriz_pos_parto: parseFloat(req.body.peso_matriz_pos_parto)

			}
			// Inserindo novos campos Peso Estado e Desmame na estrutura novoPartos
			for(var i=1; i<=36;i++){
				eval('novoParto.peso_nasc'+i+'= parseFloat(req.body.peso_nasc'+i+')')
				eval('novoParto.estado_nasc'+i+'= req.body.estado_nasc'+i)
				eval('novoParto.peso_desmame'+i+'= parseFloat(req.body.peso_desmame'+i+')')
			}

			

			var sql='INSERT INTO `Parto` (brinco_femea, data_parto, ordem_paricao, galpao, sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
			var campos=''
			for(var i=1; i<=2;i++){
				campos=campos+', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
			}
			campos=campos+') VALUES (?' 
			var interrogacao =",?" 
			interrogacao = interrogacao.repeat(12)  // DEIXA 113 REETICOES PARA PEGAR TODOS OS CAMPOS
			sql = sql + campos + interrogacao + ') ON DUPLICATE KEY UPDATE \
				brinco_femea=?,\
				data_parto=?,\
				ordem_paricao=?,\
				galpao=?,\
				sala_maternidade=?,\
				peso_matriz_pre_parto=?,\
				peso_matriz_pos_parto=?'
			
			campos=''
			for(var i=1; i<=2;i++){
				campos=campos+', peso_nasc'+i+'=?, estado_nasc'+i+'=?, peso_desmame'+i+'=?'
			}
			sql = sql + campos
			
			

			console.log(sql)
			console.log(novoParto)
			Banco.execute(
				sql,
				[novoParto.brinco_femea, novoParto.data_parto, novoParto.ordem_paricao, novoParto.galpao, novoParto.sala_maternidade, novoParto.peso_matriz_pre_parto, novoParto.peso_matriz_pos_parto,
				 novoParto.peso_nasc1, novoParto.estado_nasc1, novoParto.peso_desmame1, novoParto.peso_nasc2, novoParto.estado_nasc2, novoParto.peso_desmame2,
				 novoParto.brinco_femea, novoParto.data_parto, novoParto.ordem_paricao, novoParto.galpao, novoParto.sala_maternidade, novoParto.peso_matriz_pre_parto, novoParto.peso_matriz_pos_parto,
				 novoParto.peso_nasc1, novoParto.estado_nasc1, novoParto.peso_desmame1, novoParto.peso_nasc2, novoParto.estado_nasc2, novoParto.peso_desmame2],
				function(err, parto, fields) {
					if(!err){
						req.flash('success_msg', 'Dados salvos com sucesso!!!')
						res.redirect('/Parto/listarParto')					
					}else{
						console.log("Erro: ", err);
						req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
						res.redirect('/Parto/listarParto')
					}
				}
			);
		}
	}
	
    formAltParto ( req , res ){	
		var sql='SELECT brinco_femea, DATE_FORMAT(data_parto,"%Y-%m-%d") as data_parto, ordem_paricao, galpao,sala_maternidade, peso_matriz_pre_parto, peso_matriz_pos_parto'
        var campos=''
        for(var i=1; i<=36;i++){
            campos=campos+ ', peso_nasc'+i+', estado_nasc'+i+', peso_desmame'+i
        }
        sql=sql+campos+' FROM `Parto` WHERE brinco_femea=? AND ordem_paricao=?'
		console.log(sql)
		Banco.execute(
			sql,

			[req.params.brinco_femea, req.params.ordem_paricao],
			function(err, parto, fields) {
				if(!err){
		
					// TRATAR CASO QUANDO O SELECT RETORNAR VAZIO
					console.log(parto)
					res.render('Parto/formAddAltParto', {Parto: parto[0]})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem do Formulário de Alteração de Dados do Parto!!!')
					res.redirect('/Parto/listarParto')
				}
			}
		);
    }	
		
	excParto(req, res){
		Banco.execute(
			"DELETE FROM `Parto` WHERE brinco_femea=? AND ordem_paricao=?",
			[req.params.brinco_femea, req.params.ordem_paricao],
			function(err, parto, fields) {
				if(!err){
					req.flash('success_msg', 'Deletado com sucesso!!!')
					res.redirect('/Parto/listarParto')
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na exclusão. Parto não excluido.')
					res.redirect('/Parto/listarParto')
				}
			}
		);
    }
	
}
module.exports = new PartoController()