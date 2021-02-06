class Reprodutor {
    constructor(reprodutor){
        this.erros= []

        this.brinco= reprodutor.brinco,
        this.multiplicadora= reprodutor.multiplicadora,
        this.genetica= reprodutor.genetica,
        this.data_nasc= reprodutor.data_nasc,
        this.peso_nasc= parseFloat("0"+reprodutor.peso_nasc),
        this.data_chegada= reprodutor.data_chegada,
        this.peso_chegada= parseFloat("0"+reprodutor.peso_chegada),
        this.sexo= reprodutor.sexo      
    }
    validar(){
        this.validarBrinco()
        this.validarMultiplicadora()
        this.validarGenetica()
        this.validarPeso_nasc()
        this.validarPeso_chegada()
        this.validarSexo()
        return this.erros
    }

    validarBrinco(){
        if(!this.brinco || typeof this.brinco == undefined ){
            (this.erros).push({texto: "Brinco deve conter um valor"})
        }
        if(this.brinco.length>7){
            (this.erros).push({texto: "Brinco pode ter no máximo 7 caracteres"})
        }
    }

    validarMultiplicadora(){
       if(this.multiplicadora.length>40){
            (this.erros).push({texto: "Multiplicadora pode ter no máximo 40 caracteres"})
       }
    }

    validarGenetica(){
        if(this.genetica.length>20){
             (this.erros).push({texto: "Genética pode ter no máximo 20 caracteres"})
        }
    }

    validarPeso_nasc(){
        if(this.peso_nasc>999.999){
             (this.erros).push({texto: "Peso ao Nascer aceita valores entre 0 e 999.999"})
        }
    }

    validarPeso_chegada(){
        if(this.peso_chegada>999.999){
             (this.erros).push({texto: "Peso ao Chegar aceita valores entre 0 e 999.999"})
        }
    }
    
    validarSexo(){
        if(!this.sexo || typeof this.sexo == undefined ){
            (this.erros).push({texto: "Sexo deve conter um valor"})
        }
        if(['F','f','M','m'].indexOf(this.sexo)<0){
           (this.erros).push({texto: "Sexo aceita F ou f para fêmea. M ou m para macho"})
        }
        if(this.sexo.length>1){
            (this.erros).push({texto: "Sexo pode ter no máximo 1 caracter"})
        }
    }
}

module.exports = Reprodutor