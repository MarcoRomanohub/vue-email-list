const { createApp } = Vue;


createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      risultato: '',
      items: 10,
      emailList:[],
      numResults:0,
      isFull: false
    }
  },
  methods:{

    getApi(){

      for (let i = 0; i < this.items; i++) {
        axios.get(this.apiUrl)
        .then((res)=> {
          this.risultato = res.data.response;
          console.log(this.risultato);
          
          this.emailList.push(this.risultato)
          this.numResults++;
          this.checkRisultato();
        })
        .catch(error => {
          console.log(error.message);
        })
        
      }
      console.log(this.emailList);
      
    },

    checkRisultato(){
      if (this.numResults === this.items) {
        this.isFull = true
      }else{
        this.isFull= false
      }
    }

  },
  mounted(){

    this.getApi();

  }
}).mount('#app')