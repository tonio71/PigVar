//
// Template para criação de arquivo de rotas tratar o CRUD de Entidades
//

const express = require("express")
const router = express.Router()


const ReprodutorController = require ('../controllers/ReprodutorController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

router.get('/',  ReprodutorController.tabelaReprodutor)
router.get('/listarReprodutor',  ReprodutorController.tabelaReprodutor)
router.get('/formCadReprodutor', ReprodutorController.formCadReprodutor)
router.post('/addReprodutor', ReprodutorController.addReprodutor)
router.post('/altReprodutor', ReprodutorController.altReprodutor)
router.get('/excReprodutor/:brinco', ReprodutorController.excReprodutor)

module.exports = router