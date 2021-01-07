//
// Template para criação de arquivo de rotas tratar o CRUD de Entidades
//

const express = require("express")
const router = express.Router()


const InseminacaoController = require ('../controllers/InseminacaoController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

router.get('/listarInseminacao',  InseminacaoController.tabelaInseminacao)
router.get('/formCadInseminacao', InseminacaoController.formCadInseminacao)
router.get('/formAltInseminacao/:id', InseminacaoController.formAltInseminacao)
router.post('/addAltInseminacao', InseminacaoController.addAltInseminacao)
router.get('/excInseminacao/:id', InseminacaoController.excInseminacao)

module.exports = router