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

// FORMULÁRIO PARA ALTERAR Inseminacao PELO NÚMERO DO BRINCO
router.get('/formAddAltInseminacao/:brinco_m/:brinco_f/:data', InseminacaoController.formAltInseminacao)


// OPERAÇÃO PARA CADASTRAR E ALTERAR Inseminacao PELO NÚMERO DO BRINCO
router.post('/addAltInseminacao', InseminacaoController.addAltInseminacao)

router.get('/excInseminacao/:brinco_m/:brinco_f/:data', InseminacaoController.excInseminacao)

module.exports = router