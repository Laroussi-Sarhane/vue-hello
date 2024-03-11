const {createApp} = Vue

//il codice js sara tutto dentro a createapp
createApp({
  // i dati vengono ggestiti dal metodo data 
  // DATA è un metodo che restituisce un oggetto 
  // questo oggetto contterra tutte le nostre variabili che in realta sono proprieta dell oggetto data 
  data(){
    return{
      messaggio: 'ciao vue vediamo cosa succede ',
      altromessaggio: 'non so che scrivere',
      nome: 'laru',
      eta: '23',
      testoHtml: `<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quod fugit facere repellendus tempore enim sit dolorum modi recusandae dicta. Dignissimos porro quisquam totam omnis voluptatum quos quam odio veritatis?</p>`,
      miaClasseCss: 'verde',
      
      

    }
  }

}).mount('#app')