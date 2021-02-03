const Banco = require ('../persistence/BD')
const ReprodutorDAO = require ('../persistence/ReprodutorDAO')
const mysql = require('mysql2')
const Reprodutor =require('../models/Reprodutor')

class ReprodutorController {

	async tabelaReprodutor(req,res){
		var reprodutorDAO = new ReprodutorDAO()
		try{ 
			var reprodutores = await reprodutorDAO.getReprodutores()
			console.log('sucesso....', reprodutores)
			res.render('Reprodutor/tabelaReprodutor', {reprodutores: reprodutores})
	    }catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na montagem da Tabela de Reprodutores!!!')
			res.redirect('/')
	    }  
    }

    formCadReprodutor ( req , res ){
		res.render('Reprodutor/formAddAltReprodutor')
    }

	async formAltReprodutor ( req , res ){	
		var reprodutorDAO = new ReprodutorDAO()
		
		try{ 
			var reprodutor = await reprodutorDAO.getReprodutorByBrinco(req.params.brinco)
			
			if (typeof reprodutor[0] !== "undefined"){
				if(reprodutor[0].sexo=="F"){
					reprodutor[0].ehFemea=true
				}
				else{
					reprodutor[0].ehFemea=false
				}
				console.log('sucesso....', reprodutor[0])
				res.render('Reprodutor/formAddAltReprodutor', {Reprodutor: reprodutor[0]})
			}
			else{
				console.log('redirecionando......')
				req.flash('error_msg', 'Este reprodutor não existe mais na tabela, algum usuário apagou!!!')
				res.redirect('/Reprodutor')
			}
	    }catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na montagem da Tabela de Reprodutores!!!')
			res.redirect('/Reprodutor')
	    }  
	}
	
	async addAltReprodutor( req , res ) {
		var reprodutorDAO = new ReprodutorDAO()
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
			//console.log('zzzzzzzz',novoReprodutor)
			try{ 
				var reprodutores = await reprodutorDAO.addAltReprodutor( novoReprodutor )
				console.log('sucesso....', reprodutor)
				req.flash('success_msg', 'Dados salvos com sucesso!!!')
				res.redirect('/Reprodutor/listarReprodutor')
			}catch(erro){
				console.log('erro....',erro)
				req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
				res.redirect('/Reprodutor/listarReprodutor')
			}  
		}
	}
		
	async excReprodutor(req, res){

		var reprodutorDAO = new ReprodutorDAO()

		try{ 
			var reprodutor = await reprodutorDAO.excReprodutor(req.params.brinco)
			if (typeof reprodutor[0] !== "undefined"){
				console.log('xxxxxx ',repodutor)
				req.flash('success_msg', 'Deletado com sucesso!!!')
				res.redirect('/Reprodutor')
			}else{
				console.log('erro....')
				req.flash('error_msg', 'Erro na exclusão. Reprodutor não excluido.')
				res.redirect('/Reprodutor')	
			}
	    }catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na exclusão. Reprodutor não excluido.')
			res.redirect('/Reprodutor')
		} 
		

		/*Banco.execute(
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
		);*/
    }
}
module.exports = new ReprodutorController()