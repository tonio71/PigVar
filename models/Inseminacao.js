class Inseminacao {
    constructor(inseminacao){
        this.erros= []

        this.brinco_femea_old= inseminacao.brinco_femea_old,
        this.brinco_macho_old= inseminacao.brinco_macho_old,
        this.data_inseminacao_old= inseminacao.data_inseminacao_old,
        this.brinco_femea= inseminacao.brinco_femea,
        this.brinco_macho= inseminacao.brinco_macho,
        this.data_inseminacao= inseminacao.data_inseminacao

        if (this.brinco_femea_old==='' || this.brinco_femea_old===undefined ){
            this.brinco_femea_old= inseminacao.brinco_femea,
            this.brinco_macho_old= inseminacao.brinco_macho,
            this.data_inseminacao_old= inseminacao.data_inseminacao
        }

    }

    validar(){
		this.validarBrincoFemea()
		this.validarBrincoMacho()
		this.validarDataInseminacao()
        return this.erros
    }

    validarBrincoFemea(){
        if(!this.brinco_femea || typeof this.brinco_femea == undefined ){
            (this.erros).push({texto: "Brinco da fêmea deve conter um valor"})
        }
        if(this.brinco_femea.length>7){
            (this.erros).push({texto: "Brinco da fêmea pode ter no máximo 7 caracteres"})
        }
	}
	
	validarBrincoMacho(){
        if(!this.brinco_macho || typeof this.brinco_macho == undefined ){
            (this.erros).push({texto: "Brinco do macho deve conter um valor"})
        }
        if(this.brinco_macho.length>7){
            (this.erros).push({texto: "Brinco do macho pode ter no máximo 7 caracteres"})
        }
	}
	
	validarDataInseminacao(){
        if(!this.data_inseminacao || typeof this.data_inseminacao == undefined ){
            (this.erros).push({texto: "Deve ser informada uma data"})
        }
	}

}

module.exports = Inseminacao