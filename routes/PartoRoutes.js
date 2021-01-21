const express = require("express")
const router = express.Router() 

const PartoController = require ('../controllers/PartoController')

//const {eAdmin, eVender} = require("../helpers/eAdmin")

//Rotas da Entidade
//router.get('/categorias',  eAdmin, CategoriaController.listarCategorias)

// CONSULTAR
router.get('/',  PartoController.tabelaParto)
router.get('/listarParto',  PartoController.tabelaParto)

// FORMULÁRIO PARA CADASTRAR UM NOVO Parto
router.get('/formAddAltParto', PartoController.formCadParto)

// FORMULÁRIO PARA ALTERAR Parto PELO NÚMERO DO BRINCO
router.get('/formAddAltParto/:brinco_femea/:ordem_paricao', PartoController.formAltParto)


// OPERAÇÃO PARA CADASTRAR E ALTERAR Parto PELO NÚMERO DO BRINCO
router.post('/addAltParto', PartoController.addAltParto)

// OPERAÇÃO PARA EXCLUIR Parto PELO NÚMERO DO BRINCO
router.get('/excParto/:brinco_femea/:ordem_paricao', PartoController.excParto)

module.exports = router