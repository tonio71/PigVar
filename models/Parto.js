class Parto {
    constructor(parto){
        this.erros= []

        this.id = parto.id

        if (this.id==='' || this.id===undefined ){
         this.id = null
        } 

        this.brinco_femea= parto.brinco_femea
        this.brinco_femea_old= parto.brinco_femea_old
        this.data_parto= parto.data_parto
        this.data_parto_old= parto.data_parto_old

        if (this.brinco_femea_old==='' || this.brinco_femea_old===undefined ){
         this.brinco_femea_old=parto.brinco_femea
         }

         if (this.data_parto_old==='' || this.data_parto_old===undefined ){
            this.data_parto_old=parto.data_parto
         }

        this.galpao= parto.galpao
        this.sala_maternidade= parto.sala_maternidade
        this.peso_matriz_pre_parto= parseFloat(parto.peso_matriz_pre_parto)
        this.peso_matriz_pos_parto= parseFloat(parto.peso_matriz_pos_parto)
           
        // Inserindo novos campos Peso Estado e Desmame na estrutura novoPartos
			for(var i=1; i<=36;i++){
				eval('this.peso_nasc'+i+'= parseFloat(parto.peso_nasc'+i+')')
				eval('this.estado_nasc'+i+'= parto.estado_nasc'+i)
				eval('this.peso_desmame'+i+'= parseFloat(parto.peso_desmame'+i+')')
         } 
   }

   validar(){
      this.validarBrincoFemea()
      this.validarDataParto()
      this.validarGalpao()
      this.validarMaternidade()
      this.validarPeso_matriz_pre_parto()
      this.validarPeso_matriz_pos_parto()
      this.validarPeso_nasc()
      this.validarEstado_nasc()
      this.validarPeso_desmame()
      return this.erros
   }

   validarBrincoFemea(){
        if(!this.brinco_femea || typeof this.brinco_femea == undefined ){
            (this.erros).push({texto: "Brinco deve conter um valor"})
        }
        if(this.brinco_femea.length>7){
            (this.erros).push({texto: "Brinco pode ter no máximo 7 caracteres"})
        }
   }

   validarDataParto(){
      if(!this.data_parto || typeof this.data_parto == undefined ){
          (this.erros).push({texto: "Deve ser informada uma data"})
      }
   }

   validarGalpao(){
      if(this.galpao.length>5){
           (this.erros).push({texto: "Galpão pode ter no máximo 5s caracteres"})
      }
   }

   validarMaternidade(){
      if(this.sala_maternidade.length>5){
           (this.erros).push({texto: "Maternidade pode ter no máximo 5s caracteres"})
      }
   }

   validarPeso_matriz_pre_parto(){
      if(this.peso_matriz_pre_parto>999.999){
           (this.erros).push({texto: "Peso pré-parto aceita valores entre 0 e 999.999"})
      }
   }

   validarPeso_matriz_pos_parto(){
      if(this.peso_matriz_pos_parto>999.999){
           (this.erros).push({texto: "Peso pós-parto aceita valores entre 0 e 999.999"})
      }
   }
   
   validarPeso_nasc(){
      var cond1, cond2;
      for(var i=1; i<=2;i++){
         cond1 = eval('(this.peso_nasc'+i+ ' > 999.999)') 
         cond2 = eval( '(this.peso_nasc'+i+ ' < 0 )' )
         if( cond1 || cond2 ) {
            (this.erros).push({texto: "Peso ao nascer do leitão "+i+" só aceita valores entre 0 e 999.999"})
         }
      }
   }
 
   validarEstado_nasc(){
      var cond1;
      for(var i=1; i<=2;i++){
         cond1 = eval("(['1','2','3',''].indexOf(this.estado_nasc" +i+ " )<0)")
         if( cond1  ) {
            (this.erros).push({texto: 'Estado ao nascimento do leitão '+i+' só aceita 1 para Vivo, 2 para Nati-morto ou 3 para Mumificado.'})
         }
      }
   }

   validarPeso_desmame(){
      var cond1, cond2;
      for(var i=1; i<=2;i++){
         cond1 = eval('(this.peso_desmame'+i+ ' > 999.999)') 
         cond2 = eval( '(this.peso_desmame'+i+ ' < 0 )' )
         if( cond1 || cond2 ) {
            (this.erros).push({texto: "Peso ao desmame do leitão "+i+" só aceita valores entre 0 e 999.999"})
         }
      }
   }
}

module.exports = Parto