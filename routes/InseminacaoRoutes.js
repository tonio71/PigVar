//
// Template para criação de arquivo de rotas tratar o CRUD de Entidades
//

const express = require("express")
const router = express.Router()

const InseminacaoController = require ('../controllers/InseminacaoController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

// CONSULTAR
router.get('/',  InseminacaoController.tabelaInseminacao)
router.get('/listarInseminacao',  InseminacaoController.tabelaInseminacao)

// FORMULÁRIO PARA CADASTRAR UM NOVO Inseminacao
router.get('/formAddAltInseminacao', InseminacaoController.formCadInseminacao)

// FORMULÁRIO PARA ALTERAR Inseminacao
router.get('/formAddAltInseminacao/:brinco_femea/:brinco_macho/:data_inseminacao', InseminacaoController.formAltInseminacao)

// OPERAÇÃO PARA CADASTRAR E ALTERAR Inseminacao
router.post('/addAltInseminacao', InseminacaoController.addAltInseminacao)

// OPERAÇÃO PARA EXCLUIR Inseminacao PELO NÚMERO DO BRINCO
router.get('/excInseminacao/:brinco_femea/:brinco_macho/:data_inseminacao', InseminacaoController.excInseminacao)

module.exports = router