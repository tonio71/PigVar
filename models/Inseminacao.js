const Banco = require ('./BD')

	//modelos
	var Inseminacao = Banco.bd.define('Inseminacao',{
		brinco_macho: {type: Banco.Sequelize.STRING(7), allowNull:false},
		brinco_femea: {type: Banco.Sequelize.STRING(7), allowNull:false},
        data_inseminacao: {type: Banco.Sequelize.DATE, allowNull:false}
    })

    module.exports = Inseminacao