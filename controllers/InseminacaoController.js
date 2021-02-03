const Banco = require ('../persistence/BD')
const mysql = require('mysql2')
const Inseminacao =require('../models/Inseminacao')
const Reprodutor =require('../models/Reprodutor')

class InseminacaoController {

	async tabelaInseminacao(req,res){
		console.log('cd a tabela????')
		var [inseminacoes,fields]= await Banco.execute(
			'SELECT \
				brinco_femea, \
				brinco_macho,\
				DATE_FORMAT(data_inseminacao,"%d/%m/%Y") as data_inseminacao \
			FROM `inseminacao`',
            [],
			function(err, inseminacoes, fields) {
				console.log("inseminacoe :xxxxxxx ");
				if(!err){               
                    for (var i = 0; i < inseminacoes.length; i++) {
                        inseminacoes[i].data_inseminacaoLink = 
                                (inseminacoes[i].data_inseminacao).substr(6, 4)+'-'
                                + (inseminacoes[i].data_inseminacao).substr(3, 2)+'-'
                                + (inseminacoes[i].data_inseminacao).substr(0, 2)
                    } 
					res.render('Inseminacao/tabelaInseminacao', {inseminacoes: inseminacoes})
					console.log('xxxxxxxxxxx??? inseminacoes ', inseminacoes)
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem da Tabela de Inseminações!!!')
					res.redirect('/')
				}
			}
		);
    }

    formCadInseminacao ( req , res ){
		var reprodutor = new Reprodutor()
		var brincoFemeas = reprodutor.getBrincoFemeas()
		console.log('brincos de feeeee', brincoFemeas[0])
		res.render('Inseminacao/formAddAltInseminacao', {brincoFemeas: brincoFemeas})
    }

	addAltInseminacao = ( req , res ) => {
		var inseminacao = new Inseminacao()
		var erros = inseminacao.validar(req.body)
       
        if(erros.length > 0){
            res.render('Inseminacao/formAddAltInseminacao', {Inseminacao:req.body, erros : erros})
        }
        else{
			var novoInseminacao = {
				brinco_femea_old: req.body.brinco_femea_old,
				brinco_macho_old: req.body.brinco_macho_old,
                data_inseminacao_old: req.body.data_inseminacao_old,
                brinco_femea: req.body.brinco_femea,
				brinco_macho: req.body.brinco_macho,
                data_inseminacao: req.body.data_inseminacao
                
            }
            
            // Se algum brinco_old estiver vazio, então o usuário está CADASTRANDO inseminacao
            if (novoInseminacao.brinco_femea_old==='' ){
                novoInseminacao.brinco_femea_old= req.body.brinco_femea,
				novoInseminacao.brinco_macho_old= req.body.brinco_macho,
                novoInseminacao.data_inseminacao_old= req.body.data_inseminacao
            }
			Banco.execute(
				"INSERT INTO `inseminacao` (brinco_femea, brinco_macho, data_inseminacao) \
					VALUES (?,?,?) \
					ON DUPLICATE KEY UPDATE \
                        brinco_femea=?, \
						brinco_macho=?, \
						data_inseminacao=?",
						
				[novoInseminacao.brinco_femea_old,novoInseminacao.brinco_macho_old,novoInseminacao.data_inseminacao_old, 
				 novoInseminacao.brinco_femea,novoInseminacao.brinco_macho,novoInseminacao.data_inseminacao],

				function(err, inseminacao, fields) {
					if(!err){
						req.flash('success_msg', 'Dados salvos com sucesso!!!')
						res.redirect('/Inseminacao/listarInseminacao')					
					}else{
						console.log("Erro: ", err);
						req.flash('error_msg', 'Erro. Não foi possível salvar os dados!!!')
						res.redirect('/Inseminacao/listarInseminacao')
					}
				}
			);
		}
	}
	
    formAltInseminacao ( req , res ){	
        req.params.data_inseminacao=req.params.data_inseminacao.replace(/-/g,'/')
		Banco.execute(
			'SELECT \
                brinco_femea, \
				brinco_macho,\
				DATE_FORMAT(data_inseminacao,"%Y-%m-%d") as data_inseminacao\
			FROM `inseminacao`\
            WHERE brinco_femea=? and\
                  brinco_macho=? and\
                  data_inseminacao=?',
            [req.params.brinco_femea,req.params.brinco_macho,req.params.data_inseminacao],
            function(err, inseminacao, fields) {
				if(!err){// TRATAR CASO QUANDO O SELECT RETORNAR VAZIO
					res.render('Inseminacao/formAddAltInseminacao', {Inseminacao: inseminacao[0]})
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na montagem do Formulário de Alteração de Dados do Inseminacao!!!')
					res.redirect('/Inseminacao/listarInseminacao')
				}
			}
		);
    }	
		
	excInseminacao(req, res){
        console.log(req.params)
		Banco.execute(
            'DELETE FROM `inseminacao` WHERE brinco_femea=? and\
                                             brinco_macho=? and\
                                             data_inseminacao=?',
            [req.params.brinco_femea,req.params.brinco_macho,req.params.data_inseminacao],
            function(err, inseminacao, fields) {
				if(!err){
					req.flash('success_msg', 'Deletado com sucesso!!!')
					res.redirect('/Inseminacao/listarInseminacao')
				}
				else{
					console.log("Erro: ", err);
					req.flash('error_msg', 'Erro na exclusão. Inseminacao não excluido.')
					res.redirect('/Inseminacao/listarInseminacao')
				}
			}
		);
    }
}

module.exports = new InseminacaoController()