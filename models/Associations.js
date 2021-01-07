// exemplo: const ##Entidade## = require('../models/##Entidade##')
const Reprodutor = require('../models/Reprodutor') 
const Inseminacao = require('../models/Inseminacao') 
const Parto = require('../models/Parto') 
//##RequireModel##

// Relacionamentos entre tabelas (fazer manualmente)
//Postagem.belongsTo(Categoria, {foreignKey: 'categoriaID', as: 'PostagemParaCategoria'})
//Categoria.hasMany(Postagem, {foreignKey: 'categoriaID', as: 'CategoriaParaPostagem'})

// exemplo: ##Entidade##.sync({force: false})
Reprodutor.sync({force: false}) 
Inseminacao.sync({force: false}) 
Parto.sync({force: false}) 
//##EntidadeSync##