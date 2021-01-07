const Banco = require ('./BD')

	//modelos
	var Parto = Banco.bd.define('Parto',{
		brinco_femea: {type: Banco.Sequelize.STRING(7), allowNull: false},
        galpao: {type: Banco.Sequelize.STRING(5), allowNull: true},
	    sala_maternidade: {type: Banco.Sequelize.STRING(5), allowNull: true},
        data_parto: {type: Banco.Sequelize.DATE, allowNull:false},
		peso_matriz_pre_parto: {type: Banco.Sequelize.REAL, allowNull: true},
		peso_matriz_pos_parto: {type: Banco.Sequelize.REAL, allowNull: true},
		ordem_paricao: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true},
		
		// DADOS DO LEITAO
		peso_nasc1: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc1: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame1: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc2: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc2: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame2: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc3 {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc3: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame3: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc4: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc4: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame4: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc5: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc5: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame5: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc6: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc6: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame6: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc7: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc7: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame7: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc8: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc8: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame8: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc9: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc9: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame9: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc10: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc10: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame10: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc11: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc11: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame11: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc12: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc12: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame12: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc13: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc13: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame13: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc14: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc14: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame14: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc15: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc15: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame15: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc16: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc16: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame16: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc17: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc17: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame17: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc18: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc18: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame18: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc19: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc19: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame19: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc20: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc20: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame20: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc21: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc21: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame21: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc22: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc22: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame22: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc23: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc23: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame23: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc24: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc24: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame24: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc25: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc25: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame25: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc26: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc26: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame26: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc27: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc27: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame27: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc28: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc28: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame28: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc29: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc29: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame29: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc30: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc30: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame30: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc31: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc31: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame31: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc32: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc32: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame32: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc33: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc33: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame33: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc34: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc34: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame34: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc35: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc35: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame35: {type: Banco.Sequelize.REAL, allowNull: true},
		
		peso_nasc36: {type: Banco.Sequelize.REAL, allowNull: false},
		estado_nasc36: {type: Banco.Sequelize.STRING(1), allowNull: false},
		peso_desmame36: {type: Banco.Sequelize.REAL, allowNull: true}	
    })

    module.exports = Parto