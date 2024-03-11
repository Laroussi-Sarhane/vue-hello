const {createApp} = Vue

//il codice js sara tutto dentro a createapp
createApp({
  // i dati vengono ggestiti dal metodo data 
  // DATA è un metodo che restituisce un oggetto 
  // questo oggetto contterra tutte le nostre variabili che in realta sono proprieta dell oggetto data 
  data(){
    return{
      messaggio: 'ciao vue vediamo cosa succede '

    }
  }

}).mount('#app')