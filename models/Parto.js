class Parto {
    constructor(){
        this.erros= []
    }

   validar(parto){
      this.validarBrincoFemea(parto)
      this.validarDataParto(parto)
      this.validarGalpao(parto)
      this.validarMaternidade(parto)
      this.validarPeso_matriz_pre_parto(parto)
      this.validarPeso_matriz_pos_parto(parto)
      this.validarPeso_nasc(parto)
      this.validarEstado_nasc(parto)
      this.validarPeso_desmame(parto)
      return this.erros
   }

   validarBrincoFemea(parto){
        if(!parto.brinco_femea || typeof parto.brinco_femea == undefined ){
            (this.erros).push({texto: "Brinco deve conter um valor"})
        }
        if(parto.brinco_femea.length>7){
            (this.erros).push({texto: "Brinco pode ter no máximo 7 caracteres"})
        }
   }

   validarDataParto(parto){
      if(!parto.data_parto || typeof parto.data_parto == undefined ){
          (this.erros).push({texto: "Deve ser informada uma data"})
      }
   }

   validarGalpao(parto){
      if(parto.galpao.length>5){
           (this.erros).push({texto: "Galpão pode ter no máximo 5s caracteres"})
      }
   }

   validarMaternidade(parto){
      if(parto.sala_maternidade.length>5){
           (this.erros).push({texto: "Maternidade pode ter no máximo 5s caracteres"})
      }
   }

   validarPeso_matriz_pre_parto(parto){
      if(parto.peso_matriz_pre_parto>999.999){
           (this.erros).push({texto: "Peso pré-parto aceita valores entre 0 e 999.999"})
      }
   }

   validarPeso_matriz_pos_parto(parto){
      if(parto.peso_matriz_pos_parto>999.999){
           (this.erros).push({texto: "Peso pós-parto aceita valores entre 0 e 999.999"})
      }
   }
   
   validarPeso_nasc(parto){
      var cond1, cond2;
      for(var i=1; i<=2;i++){
         cond1 = eval('(parto.peso_nasc'+i+ ' > 999.999)') 
         cond2 = eval( '(parto.peso_nasc'+i+ ' < 0 )' )
         if( cond1 || cond2 ) {
            (this.erros).push({texto: "Peso ao nascer do leitão "+i+" só aceita valores entre 0 e 999.999"})
         }
      }
   }
 
   validarEstado_nasc(parto){
      var cond1;
      for(var i=1; i<=2;i++){
         cond1 = eval("(['1','2','3',''].indexOf(parto.estado_nasc" +i+ " )<0)")
         if( cond1  ) {
            (this.erros).push({texto: 'Estado ao nascimento do leitão '+i+' só aceita 1 para Vivo, 2 para Nati-morto ou 3 para Mumificado.'})
         }
      }
   }

   validarPeso_desmame(parto){
      var cond1, cond2;
      for(var i=1; i<=2;i++){
         cond1 = eval('(parto.peso_desmame'+i+ ' > 999.999)') 
         cond2 = eval( '(parto.peso_desmame'+i+ ' < 0 )' )
         if( cond1 || cond2 ) {
            (this.erros).push({texto: "Peso ao desmame do leitão "+i+" só aceita valores entre 0 e 999.999"})
         }
      }
   }
}

module.exports = Parto