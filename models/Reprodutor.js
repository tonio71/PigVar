class Reprodutor {
    constructor(){
        this.erros= []
    }

    validar(reprodutor){
        this.validarBrinco(reprodutor)
        this.validarMultiplicadora(reprodutor)
        this.validarGenetica(reprodutor)
        this.validarPeso_nasc(reprodutor)
        this.validarPeso_chegada(reprodutor)
        this.validarSexo(reprodutor)
        
        return this.erros
    }

    validarBrinco(reprodutor){
        if(!reprodutor.brinco || typeof reprodutor.brinco == undefined ){
            (this.erros).push({texto: "Brinco deve conter um valor"})
        }
        if(reprodutor.brinco.length>7){
            (this.erros).push({texto: "Brinco pode ter no máximo 7 caracteres"})
        }
    }

    validarMultiplicadora(reprodutor){
       if(reprodutor.multiplicadora.length>40){
            (this.erros).push({texto: "Multiplicadora pode ter no máximo 40 caracteres"})
       }
    }

    validarGenetica(reprodutor){
        if(reprodutor.genetica.length>20){
             (this.erros).push({texto: "Genética pode ter no máximo 20 caracteres"})
        }
    }

    validarPeso_nasc(reprodutor){
        if(reprodutor.peso_nasc>999.999){
             (this.erros).push({texto: "Peso ao Nascer aceita valores entre 0 e 999.999"})
        }
    }

    validarPeso_chegada(reprodutor){
        if(reprodutor.peso_chegada>999.999){
             (this.erros).push({texto: "Peso ao Chegar aceita valores entre 0 e 999.999"})
        }
    }
    
    validarSexo(reprodutor){
        if(!reprodutor.sexo || typeof reprodutor.sexo == undefined ){
            (this.erros).push({texto: "Sexo deve conter um valor"})
        }
        if(['F','f','M','m'].indexOf(reprodutor.sexo)<0){
           (this.erros).push({texto: "Sexo aceita F ou f para fêmea. M ou m para macho"})
        }
        if(reprodutor.sexo.length>1){
            (this.erros).push({texto: "Sexo pode ter no máximo 1 caracter"})
        }
    }
}

module.exports = Reprodutor