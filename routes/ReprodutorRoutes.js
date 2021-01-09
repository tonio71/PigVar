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
router.get('/formAltReprodutor/:id', ReprodutorController.formAltReprodutor)
router.post('/addAltReprodutor', ReprodutorController.addAltReprodutor)
router.get('/excReprodutor/:id', ReprodutorController.excReprodutor)

module.exports = router