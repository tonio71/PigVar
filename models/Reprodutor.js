const Banco = require ('./BD')

	//modelos
	var Reprodutor = Banco.bd.define('Reprodutor',{
		brinco: {type: Banco.Sequelize.STRING(7), allowNull: false},
        multiplicadora: {type: Banco.Sequelize.STRING(40), allowNull: true},
        data_nasc: {type: Banco.Sequelize.DATE, allowNull:true},
		peso_nasc: {type: Banco.Sequelize.REAL, allowNull: true},
        data_chegada: {type: Banco.Sequelize.DATE, defaultValue: Banco.Sequelize.NOW},
        peso_chegada: {type: Banco.Sequelize.REAL, allowNull: true},
		genetica: {type: Banco.Sequelize.STRING(20), allowNull: true},
        sexo: {type: Banco.Sequelize.STRING(1), allowNull: false}
    })

    module.exports = Reprodutor