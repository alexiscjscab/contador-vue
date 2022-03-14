const app = Vue.createApp({
  data(){
    return {
      title: 'Contador App de Vue',
      count: 0
    }
  },
  methods: {
    // addCount(){
    //   this.count++
    // },
    // disCount(){
    //   this.count--
    // },
    // resetCount(){
    //   this.count = 0
    // }
    modCount(instruction = 'add', value){
      if(instruction === 'dis'){
        this.count -= value
      }else{
        this.count += value
      }
    }
  }
}).mount('#app')