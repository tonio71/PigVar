const Inseminacao =require('../models/Inseminacao')
const InseminacaoDAO = require ('../persistence/InseminacaoDAO')
const Reprodutor =require('../models/Reprodutor')
const ReprodutorDAO = require ('../persistence/ReprodutorDAO')

class InseminacaoController { 

	async tabelaInseminacao(req,res){

		var inseminacaoDAO = new InseminacaoDAO()
		try{ 
			var inseminacoes = await inseminacaoDAO.getInseminacoes()
			for (var i = 0; i < inseminacoes.length; i++) {
				inseminacoes[i].data_inseminacaoLink = 
						(inseminacoes[i].data_inseminacao).substr(6, 4)+'-'
						+ (inseminacoes[i].data_inseminacao).substr(3, 2)+'-'
						+ (inseminacoes[i].data_inseminacao).substr(0, 2)
			} 
			res.render('Inseminacao/tabelaInseminacao', {inseminacoes: inseminacoes})
	    }catch(erro){
			console.log('erro....', erro)
			req.flash('error_msg', 'Erro na montagem da Tabela de Inseminações!!!')
			res.redirect('/')
	    }  
    }

    async formCadInseminacao ( req , res ){
		var reprodutorDAO = new ReprodutorDAO()
		var brincoFemeas = await reprodutorDAO.getReprodutorBySexo("F")
		var brincoMachos = await reprodutorDAO.getReprodutorBySexo("M")
		res.render('Inseminacao/formAddAltInseminacao', {brincoFemeas: brincoFemeas, brincoMachos: brincoMachos })
    }

	async addAltInseminacao( req , res ){
		var inseminacaoDAO = new InseminacaoDAO()
		var novoInseminacao = new Inseminacao(req.body)
		var erros = novoInseminacao.validar()
        if(erros.length > 0){
            res.render('Inseminacao/formAddAltInseminacao', {Inseminacao:req.body, erros : erros})
        }
        else{
			try{ 
				var inseminacoes = await inseminacaoDAO.addAltInseminacao( novoInseminacao )
				req.flash('success_msg', 'Dados salvos com sucesso!!!')
				res.redirect('/Inseminacao/listarInseminacao')					
			}catch(erro){
				console.log('erro....',erro)
				req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
				res.redirect('/Inseminacao/listarInseminacao')					
			}  
		}
	}
	
    async formAltInseminacao ( req , res ){
		// substitui o símbolo de hífen por barra na data	
		req.params.data_inseminacao=req.params.data_inseminacao.replace(/-/g,'/')
		
		var inseminacaoDAO = new InseminacaoDAO()
		
		try{ 
			var inseminacao = await inseminacaoDAO.getInseminacao(req.params.brinco_femea,req.params.brinco_macho,req.params.data_inseminacao)
			if (typeof inseminacao[0] !== "undefined"){
				var reprodutorDAO = new ReprodutorDAO()
				var brincoFemeas = await reprodutorDAO.getReprodutorBySexo("F")
				var brincoMachos = await reprodutorDAO.getReprodutorBySexo("M")
				res.render('Inseminacao/formAddAltInseminacao', {Inseminacao: inseminacao[0], brincoFemeas: brincoFemeas, brincoMachos: brincoMachos})
			}
			else{
				req.flash('error_msg', 'Este reprodutor não existe mais na tabela, algum usuário apagou!!!')
				res.redirect('/Inseminacao')
			}
	    }catch(erro){
			console.log('erro....',erro)
			req.flash('error_msg', 'Erro na montagem do Formulário de Alteração de Dados do Inseminacao!!!')
			res.redirect('/Inseminacao')
	    }
    }	
		
	async excInseminacao(req, res){
		var inseminacaoDAO = new InseminacaoDAO()
		var inseminacao = await inseminacaoDAO.excInseminacao(req.params.brinco_femea,req.params.brinco_macho,req.params.data_inseminacao)

		if (typeof inseminacao !== "undefined"){
			req.flash('success_msg', 'Deletado com sucesso!!!')
			res.redirect('/Inseminacao')
		}
		else{
			console.log("Erro: ");
			req.flash('error_msg', 'Erro na exclusão. Inseminacao não excluido.')
			res.redirect('/Inseminacao')
		}
    }
}

module.exports = new InseminacaoController()