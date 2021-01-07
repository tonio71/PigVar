//
// Template para criação de controller de Entidades
//

const modelReprodutor = require ('../models/Reprodutor')

class ReprodutorController {

	listarReprodutor(req,res){  
        modelReprodutor.findAll(
            {  order: [['date', 'DESC']] }
        )
        .then( function(arrayReprodutor){
                res.render('Reprodutor/listarReprodutor', {arrayReprodutor: arrayReprodutor})
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/')
        })
    }

    formCadReprodutor ( req , res ){
        res.render('Reprodutor/formAddAltReprodutor')
    }

    formAltReprodutor ( req , res ){
        modelReprodutor.findOne(
            {  where: {id:req.params.id} }
        )
        .then( function(umReprodutor){
                umReprodutor.dataValues.senha2=umReprodutor.dataValues.senha
                res.render('Reprodutor/formAddAltReprodutor', {Reprodutor: umReprodutor.dataValues})
        })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/Reprodutor/listarReprodutor')
        })
    }

    async addAltReprodutor ( req , res ){
        var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoReprodutor(req)

        
        if(erros.length > 0){
            res.render('Reprodutor/formAddAltReprodutor', {Reprodutor:req.body, erros : erros})
        }
        else{                
            var novoReprodutor = {
				nome: req.body.nome,
                slug: req.body.slug
            }
            if (req.body.id.length == 0){
                modelReprodutor.create(novoReprodutor)
                .then( function(item){
					req.flash('success_msg', 'Cadastrado com sucesso!!!')
					res.redirect('/Reprodutor/listarReprodutor')
				})
                .catch( (erro) => {
                    req.flash('error_msg', 'Erro!!! Não foi possível cadastrar. '+erro)
                    res.redirect('/Reprodutor/listarReprodutor')
                })
			}else{ 
                modelReprodutor.update(novoReprodutor,
                    {where: {id:req.body.id}})
                .then( function(){
                    req.flash('success_msg', 'Alterado com sucesso!!!')
                    res.redirect('/Reprodutor/listarReprodutor')
                })
                .catch( function(erro){
                    req.flash('error_msg', 'Erro!!! Não foi possível alterar. ' + erro)
                    res.redirect('/Reprodutor/listarReprodutor')
                })
            }
        }
    }
	
	excReprodutor(req, res){
        modelReprodutor.destroy({where: {'id' : req.params.id}})
        .then( function(){
            req.flash('success_msg', 'Exclusão efetuada com sucesso!!!')
            res.redirect('/Reprodutor/listarReprodutor')
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro!!! Não foi possível excluir. '+erro)
            res.redirect('/Reprodutor/listarReprodutor')
        })  
    }
	
}
module.exports = new ReprodutorController()