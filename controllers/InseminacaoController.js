//
// Template para criação de controller de Entidades
//

const modelInseminacao = require ('../models/Inseminacao')

class InseminacaoController {

	listarInseminacao(req,res){  
        modelInseminacao.findAll(
            {  order: [['date', 'DESC']] }
        )
        .then( function(arrayInseminacao){
                res.render('Inseminacao/listarInseminacao', {arrayInseminacao: arrayInseminacao})
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/')
        })
    }

    formCadInseminacao ( req , res ){
        res.render('Inseminacao/formAddAltInseminacao')
    }

    formAltInseminacao ( req , res ){
        modelInseminacao.findOne(
            {  where: {id:req.params.id} }
        )
        .then( function(umInseminacao){
                umInseminacao.dataValues.senha2=umInseminacao.dataValues.senha
                res.render('Inseminacao/formAddAltInseminacao', {Inseminacao: umInseminacao.dataValues})
        })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/Inseminacao/listarInseminacao')
        })
    }

    async addAltInseminacao ( req , res ){
        var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoInseminacao(req)

        
        if(erros.length > 0){
            res.render('Inseminacao/formAddAltInseminacao', {Inseminacao:req.body, erros : erros})
        }
        else{                
            var novoInseminacao = {
				nome: req.body.nome,
                slug: req.body.slug
            }
            if (req.body.id.length == 0){
                modelInseminacao.create(novoInseminacao)
                .then( function(item){
					req.flash('success_msg', 'Cadastrado com sucesso!!!')
					res.redirect('/Inseminacao/listarInseminacao')
				})
                .catch( (erro) => {
                    req.flash('error_msg', 'Erro!!! Não foi possível cadastrar. '+erro)
                    res.redirect('/Inseminacao/listarInseminacao')
                })
			}else{ 
                modelInseminacao.update(novoInseminacao,
                    {where: {id:req.body.id}})
                .then( function(){
                    req.flash('success_msg', 'Alterado com sucesso!!!')
                    res.redirect('/Inseminacao/listarInseminacao')
                })
                .catch( function(erro){
                    req.flash('error_msg', 'Erro!!! Não foi possível alterar. ' + erro)
                    res.redirect('/Inseminacao/listarInseminacao')
                })
            }
        }
    }
	
	excInseminacao(req, res){
        modelInseminacao.destroy({where: {'id' : req.params.id}})
        .then( function(){
            req.flash('success_msg', 'Exclusão efetuada com sucesso!!!')
            res.redirect('/Inseminacao/listarInseminacao')
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro!!! Não foi possível excluir. '+erro)
            res.redirect('/Inseminacao/listarInseminacao')
        })  
    }
	
}
module.exports = new InseminacaoController()