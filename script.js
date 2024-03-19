const { createApp } = Vue;


createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      risultato: '',
      items: 10
    }
  },
  methods:{

    getApi(){

      axios.get(this.apiUrl + `?items=${this.items}`)
      .then((res)=> {
        console.log(res.data);
        this.risultato = res.data.response
      })
      .catch(error => {
        console.log(error.message);
      })

    }

  },
  mounted(){

    // this.getApi();

  }
}).mount('#app')