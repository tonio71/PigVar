const Parto =require('../models/Parto')
const PartoDAO = require ('../persistence/PartoDAO')

class PartoController {
	async tabelaParto(req,res){
		var partoDAO = new PartoDAO()
		try{
			var partos = await partoDAO.getPartos() 
			if(partos){
				var brinco_femea = partos[0].brinco_femea
				partos[0].ordem_paricao=1
				for (var i = 1; i < partos.length; i++) {
					if (brinco_femea != partos[i].brinco_femea){
						partos[i].ordem_paricao=1
						brinco_femea = partos[i].brinco_femea
					}else{
						partos[i].ordem_paricao=partos[i-1].ordem_paricao+1
					}
				} 
				res.render('Parto/tabelaParto', {partos: partos})
			}
			else{
				console.log("Erro: ", erro);
				req.flash('error_msg', 'Erro na montagem da Tabela de Partos!!!')
				res.redirect('/')
			}
		}
		catch(erro){
			console.log("Erro: ", erro);
			req.flash('error_msg', 'Erro na montagem da Tabela de Partos!!!')
			res.redirect('/')
		}
    }

	formCadParto ( req , res ){
		res.render('Parto/formAddAltParto')
    }

	async formAltParto ( req , res ){	
		var partoDAO = new PartoDAO()
 
		try{ 
			var parto = await partoDAO.getPartoById(req.params.id)
			if (typeof parto[0] !== "undefined"){
				res.render('Parto/formAddAltParto', {Parto: parto[0]})
			}
			else{
				req.flash('error_msg', 'Este parto não existe mais na tabela, algum usuário apagou!!!')
				res.redirect('/Parto')
			}
	    }catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na montagem da Tabela de Parto!!!')
			res.redirect('/Parto')
	    }  
	}

 	async addAltParto( req , res ){
		var partoDAO = new PartoDAO()
		var novoParto = new Parto(req.body)
		var erros = novoParto.validar() 
       
        if(erros.length > 0){
            res.render('Parto/formAddAltParto', {Parto:req.body, erros : erros})
        }
        else{
			try{ 
				var partos = await partoDAO.addAltParto( novoParto )
				req.flash('success_msg', 'Dados salvos com sucesso!!!')
				res.redirect('/Parto')
			}catch(erro){
				console.log('erro....',erro)
				req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
				res.redirect('/Parto')
			}  
		}
	}
		
	async excParto(req, res){
		var partoDAO = new PartoDAO()
		try{ 
			var parto = await partoDAO.excParto(req.params.id)
			if (typeof parto !== "undefined"){
				req.flash('success_msg', 'Deletado com sucesso!!!')
				res.redirect('/Parto')
			}else{
				console.log('erro....')
				req.flash('error_msg', 'Erro na exclusão. Parto não excluido.')
				res.redirect('/Parto')	
			}
		}catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na exclusão. Parto não excluido.')
			res.redirect('/Parto')
		} 
	}
}
module.exports = new PartoController()