//
// Template para criação de controller de Entidades
//

const modelParto = require ('../models/Parto')

class PartoController {

	listarParto(req,res){  
        modelParto.findAll(
            {  order: [['date', 'DESC']] }
        )
        .then( function(arrayParto){
                res.render('Parto/listarParto', {arrayParto: arrayParto})
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/')
        })
    }

    formCadParto ( req , res ){
        res.render('Parto/formAddAltParto')
    }

    formAltParto ( req , res ){
        modelParto.findOne(
            {  where: {id:req.params.id} }
        )
        .then( function(umParto){
                umParto.dataValues.senha2=umParto.dataValues.senha
                res.render('Parto/formAddAltParto', {Parto: umParto.dataValues})
        })
        .catch( function(erro){
            req.flash('error_msg', 'Erro na consulta'+erro)
            res.redirect('/Parto/listarParto')
        })
    }

    async addAltParto ( req , res ){
        var erros = []
		// Escrever código para validação
		// var erros = ValidaçãoParto(req)

        
        if(erros.length > 0){
            res.render('Parto/formAddAltParto', {Parto:req.body, erros : erros})
        }
        else{                
            var novoParto = {
				nome: req.body.nome,
                slug: req.body.slug
            }
            if (req.body.id.length == 0){
                modelParto.create(novoParto)
                .then( function(item){
					req.flash('success_msg', 'Cadastrado com sucesso!!!')
					res.redirect('/Parto/listarParto')
				})
                .catch( (erro) => {
                    req.flash('error_msg', 'Erro!!! Não foi possível cadastrar. '+erro)
                    res.redirect('/Parto/listarParto')
                })
			}else{ 
                modelParto.update(novoParto,
                    {where: {id:req.body.id}})
                .then( function(){
                    req.flash('success_msg', 'Alterado com sucesso!!!')
                    res.redirect('/Parto/listarParto')
                })
                .catch( function(erro){
                    req.flash('error_msg', 'Erro!!! Não foi possível alterar. ' + erro)
                    res.redirect('/Parto/listarParto')
                })
            }
        }
    }
	
	excParto(req, res){
        modelParto.destroy({where: {'id' : req.params.id}})
        .then( function(){
            req.flash('success_msg', 'Exclusão efetuada com sucesso!!!')
            res.redirect('/Parto/listarParto')
            })
        .catch( function(erro){
            req.flash('error_msg', 'Erro!!! Não foi possível excluir. '+erro)
            res.redirect('/Parto/listarParto')
        })  
    }
	
}
module.exports = new PartoController()