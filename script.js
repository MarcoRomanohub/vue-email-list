const { createApp } = Vue;


createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      risultato: '',
      items: 10,
      emailList:[]
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
        })
        .catch(error => {
          console.log(error.message);
        })
        
      }
      console.log(this.emailList);
      
    }

  },
  mounted(){

    this.getApi();

  }
}).mount('#app')