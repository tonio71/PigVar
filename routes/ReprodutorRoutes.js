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

// PARA CADASTRAR UM NOVO REPRODUTOR
router.get('/formAddAltReprodutor', ReprodutorController.formCadReprodutor)
router.post('/addReprodutor', ReprodutorController.addReprodutor)

// PARA ALTERAR REPRODUTOR PELO NÚMERO DO BRINCO
router.get('/formAddAltReprodutor/:brinco', ReprodutorController.formAltReprodutor)
router.post('/altReprodutor', ReprodutorController.altReprodutor)

router.get('/excReprodutor/:brinco', ReprodutorController.excReprodutor)

module.exports = router