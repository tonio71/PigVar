//
// Template para criação de arquivo de rotas tratar o CRUD de Entidades
//

const express = require("express")
const router = express.Router()

const ReprodutorController = require ('../controllers/ReprodutorController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

// CONSULTAR
router.get('/',  ReprodutorController.tabelaReprodutor)
router.get('/listarReprodutor',  ReprodutorController.tabelaReprodutor)

// FORMULÁRIO PARA CADASTRAR UM NOVO REPRODUTOR
router.get('/formAddAltReprodutor', ReprodutorController.formCadReprodutor)

// FORMULÁRIO PARA ALTERAR REPRODUTOR PELO NÚMERO DO BRINCO
router.get('/formAddAltReprodutor/:brinco', ReprodutorController.formAltReprodutor)


// OPERAÇÃO PARA CADASTRAR E ALTERAR REPRODUTOR PELO NÚMERO DO BRINCO
router.post('/addAltReprodutor', ReprodutorController.addAltReprodutor)

router.get('/excReprodutor/:brinco', ReprodutorController.excReprodutor)

module.exports = router