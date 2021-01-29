const Banco = require ('../models/BD')
const mysql = require('mysql2')
const Reprodutor =require('../models/Reprodutor')

class ReprodutorController {

	tabelaReprodutor(req,res){
		Banco.execute(
			'SELECT \
				brinco, \
				multiplicadora,\
				genetica,\
				DATE_FORMAT(data_nasc,"%d/%m/%Y") as data_nasc, \
				peso_nasc,\
				DATE_FORMAT(data_chegada,"%d/%m/%Y") as data_chegada, \
				peso_chegada,\
				sexo\
			FROM `reprodutor`',
			[],

			function(err, reprodutores, fields) {
				if(!err){
					res.render('Reprodutor/tabelaReprodutor', {reprodutores: reprodutores})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem da Tabela de Reprodutores!!!')
					res.redirect('/')
				}
			}
		);	
    }

    formCadReprodutor ( req , res ){
		res.render('Reprodutor/formAddAltReprodutor')
    }

	addAltReprodutor = ( req , res ) => {
		var reprodutor = new Reprodutor()
		var erros = reprodutor.validar(req.body) 
       
        if(erros.length > 0){
            res.render('Reprodutor/formAddAltReprodutor', {Reprodutor:req.body, erros : erros})
        }
        else{
			var novoReprodutor = {
				brinco: req.body.brinco,
				multiplicadora: req.body.multiplicadora,
				genetica: req.body.genetica,
				data_nasc: req.body.data_nasc,
				peso_nasc: parseFloat(req.body.peso_nasc),
				data_chegada: req.body.data_chegada,
				peso_chegada: parseFloat(req.body.peso_chegada),
				sexo: req.body.sexo
			}
				
			Banco.execute(
				"INSERT INTO `reprodutor` (brinco, multiplicadora, genetica, data_nasc, peso_nasc, data_chegada, peso_chegada, sexo) \
					VALUES (?,?,?, STR_TO_DATE(?,'%Y-%m-%d') ,?, STR_TO_DATE(?,'%Y-%m-%d') ,?,?) \
					ON DUPLICATE KEY UPDATE \
						multiplicadora=?, \
						genetica=?, \
						data_nasc= STR_TO_DATE(?,'%Y-%m-%d'), \
						peso_nasc=?, \
						data_chegada=STR_TO_DATE(?,'%Y-%m-%d'), \
						peso_chegada=?, \
						sexo=? ",

				[novoReprodutor.brinco,novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo, 
				novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo],

				function(err, reprodutor, fields) {
					if(!err){
						req.flash('success_msg', 'Dados salvos com sucesso!!!')
						res.redirect('/Reprodutor/listarReprodutor')					
					}else{
						console.log("Erro: ", err);
						req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
						res.redirect('/Reprodutor/listarReprodutor')
					}
				}
			);
		}
	}
	
    formAltReprodutor ( req , res ){	
		Banco.execute(
			'SELECT \
				brinco, \
				multiplicadora,\
				genetica,\
				DATE_FORMAT(data_nasc,"%Y-%m-%d") as data_nasc, \
				peso_nasc,\
				DATE_FORMAT(data_chegada,"%Y-%m-%d") as data_chegada, \
				peso_chegada,\
				sexo\
			FROM `reprodutor`\
			WHERE brinco=?',

			[req.params.brinco],
			function(err, reprodutor, fields) {
				if(!err){
		
					// TRATAR CASO QUANDO O SELECT RETORNAR VAZIO
					if(reprodutor[0].sexo=="F"){
						reprodutor[0].ehFemea=true
					}
					else{
						reprodutor[0].ehFemea=false
					}
					res.render('Reprodutor/formAddAltReprodutor', {Reprodutor: reprodutor[0]})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem do Formulário de Alteração de Dados do Reprodutor!!!')
					res.redirect('/Reprodutor/listarReprodutor')
				}
			}
		);
    }	
		
	excReprodutor(req, res){
		Banco.execute(
			"DELETE FROM `reprodutor` WHERE brinco=?;",
			[req.params.brinco],
			function(err, reprodutor, fields) {
				if(!err){
					req.flash('success_msg', 'Deletado com sucesso!!!')
					res.redirect('/Reprodutor/listarReprodutor')
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na exclusão. Reprodutor não excluido.')
					res.redirect('/Reprodutor/listarReprodutor')
				}
			}
		);
    }
}
module.exports = new ReprodutorController()