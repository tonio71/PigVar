//
// Template para criação de arquivo de rotas tratar o CRUD de Entidades
//

const express = require("express")
const router = express.Router()


const PartoController = require ('../controllers/PartoController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

router.get('/listarParto',  PartoController.tabelaParto)
router.get('/formCadParto', PartoController.formCadParto)
router.get('/formAltParto/:id', PartoController.formAltParto)
router.post('/addAltParto', PartoController.addAltParto)
router.get('/excParto/:id', PartoController.excParto)

module.exports = router