const Reprodutor =require('../models/Reprodutor')
const ReprodutorDAO = require ('../persistence/ReprodutorDAO')


class ReprodutorController {

	async tabelaReprodutor(req,res){
		var reprodutorDAO = new ReprodutorDAO()
		try{ 
			var reprodutores = await reprodutorDAO.getReprodutores()
			res.render('Reprodutor/tabelaReprodutor', {reprodutores: reprodutores})
	    }catch(erro){
			console.log('erro....', erro)
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
				res.render('Reprodutor/formAddAltReprodutor', {Reprodutor: reprodutor[0]})
			}
			else{
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
		var novoReprodutor = new Reprodutor(req.body)
		var erros = novoReprodutor.validar() 
       
        if(erros.length > 0){
            res.render('Reprodutor/formAddAltReprodutor', {Reprodutor:req.body, erros : erros})
        }
        else{
			try{ 
				var reprodutores = await reprodutorDAO.addAltReprodutor( novoReprodutor )
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
			if (typeof reprodutor !== "undefined"){
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
    }
}
module.exports = new ReprodutorController()