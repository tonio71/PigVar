class Inseminacao {
    constructor(){
        this.erros= []
    }

    validar(inseminacao){
		this.validarBrincoFemea(inseminacao)
		this.validarBrincoMacho(inseminacao)
		this.validarDataInseminacao(inseminacao)
        return this.erros
    }

    validarBrincoFemea(inseminacao){
        if(!inseminacao.brinco_femea || typeof inseminacao.brinco_femea == undefined ){
            (this.erros).push({texto: "Brinco da fêmea deve conter um valor"})
        }
        if(inseminacao.brinco_femea.length>7){
            (this.erros).push({texto: "Brinco da fêmea pode ter no máximo 7 caracteres"})
        }
	}
	
	validarBrincoMacho(inseminacao){
        if(!inseminacao.brinco_macho || typeof inseminacao.brinco_macho == undefined ){
            (this.erros).push({texto: "Brinco do macho deve conter um valor"})
        }
        if(inseminacao.brinco_macho.length>7){
            (this.erros).push({texto: "Brinco do macho pode ter no máximo 7 caracteres"})
        }
	}
	
	validarDataInseminacao(inseminacao){
        if(!inseminacao.data_inseminacao || typeof inseminacao.data_inseminacao == undefined ){
            (this.erros).push({texto: "Deve ser informada uma data"})
        }
	}

}

module.exports = Inseminacao