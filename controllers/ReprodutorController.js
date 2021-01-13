//
// Template para criação de controller de Entidades
//

const Banco = require ('../models/BD')
const mysql = require('mysql2');
//const modelReprodutor = require ('../models/Reprodutor')

class ReprodutorController {

	tabelaReprodutor(req,res){
		console.log("tabela reprodutor")
		Banco.execute(
			'SELECT * FROM `reprodutor`',
			[],
			function(err, reprodutores, fields) {
				if(!err){
					console.log("TABELAREPRODUTOR............. ", reprodutores)
					res.json(reprodutores);
					//res.render('Reprodutor/tabelaReprodutor', {reprodutores: reprodutores})
					//console.log("RESULTADOS: ",results); // results contains rows returned by server
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na consulta'+erro)
					res.redirect('/')
				}
			}
		);	
    }

    formCadReprodutor ( req , res ){
        res.render('Reprodutor/formAddAltReprodutor')
    }

	addReprodutor ( req , res ){
        var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoReprodutor(req)

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
			console.log("Reprodutor.......: ", novoReprodutor)
			//res.json(novoReprodutor);
			console.log("tamanho do brinco do reprodutor ",req.body.brinco.length)
			Banco.execute(
				'INSERT INTO `reprodutor` (brinco, multiplicadora, genetica, data_nasc, peso_nasc, data_chegada, peso_chegada, sexo) VALUES (?,?,?,?,?,?,?,?)',
				[novoReprodutor.brinco,novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo],
				function(err, reprodutor, fields) {
					if(!err){
						res.json(reprodutor)
						//req.flash('success_msg', 'Cadastrado com sucesso!!!')
						//res.redirect('/Reprodutor/listarReprodutor')					
					}else{
						console.log("Erro: ", err);
						req.flash('error_msg', 'Erro!!! Não foi possível cadastrar. '+erro)
						res.redirect('/Reprodutor/listarReprodutor')
					}
				}
			);		
		}
	}
	
    formAltReprodutor ( req , res ){	
		Banco.execute(
			'SELECT * FROM `reprodutor` where brinco=?',
			[req.params.id],
			function(err, reprodutor, fields) {
				if(!err){
					res.json(reprodutor)
					//res.render('Reprodutor/formAddAltReprodutor', {reprodutor: reprodutor})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na consulta'+erro)
					res.redirect('/Reprodutor/listarReprodutor')
				}
			}
		);
    }	

    altReprodutor ( req , res ){
        var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoReprodutor(req)
        
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
			console.log("Reprodutor.......: ", novoReprodutor)
            //res.json(novoReprodutor);
			console.log("tamanho do brinco do reprodutor ",req.body.brinco.length)
			
			Banco.execute(
				"UPDATE `reprodutor` \
				SET multiplicadora=?, \
					genetica=?, \
					data_nasc=?, \
					peso_nasc=?, \
					data_chegada=?, \
					peso_chegada=?, \
					sexo=? \
				WHERE brinco = ?",
				[novoReprodutor.multiplicadora,novoReprodutor.genetica,novoReprodutor.data_nasc,novoReprodutor.peso_nasc, novoReprodutor.data_chegada,novoReprodutor.peso_chegada,novoReprodutor.sexo,novoReprodutor.brinco],
				function(err, reprodutor, fields) {
					if(!err){
						res.json(reprodutor)
						//req.flash('success_msg', 'Cadastrado com sucesso!!!')
						//res.redirect('/Reprodutor/listarReprodutor')					
					}else{
						console.log("Erro: ", err);
						//req.flash('error_msg', 'Erro!!! Não foi possível cadastrar. '+erro)
						res.redirect('/Reprodutor/listarReprodutor')
					}
				}
			);
        }
    }
	
	excReprodutor(req, res){
		console.log("Excluir.....: ",req.params.brinco )
		Banco.execute(
			"DELETE FROM `reprodutor` WHERE brinco=?;",
			[req.params.brinco],
			function(err, reprodutor, fields) {
				if(!err){
					res.json(reprodutor)
					//res.render('Reprodutor/formAddAltReprodutor', {reprodutor: reprodutor})
				}
				else{
					console.log("Erro: ", err);
					//req.flash('error_msg', 'Erro na consulta'+erro)
					res.redirect('/Reprodutor/listarReprodutor')
				}
			}
		);
    }
}
module.exports = new ReprodutorController()