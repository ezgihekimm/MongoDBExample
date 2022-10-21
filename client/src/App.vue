<template>
  <div class="_container">

  <div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input v-model="name" @keyup.enter="search(name)" type="text" aria-label="First name" class="form-control">
    <button type="button"  @click="search(name)" class="btn btn-dark">Search</button>
  </div>

  <div class="info">
        {{ result }}
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import 'bootstrap'

  export default {
    name: 'App',
    data() {
      return {
        hakem: [],
        name: "",
        lastname: "",
        result: null

      };
    },
    async mounted() {
      const response = await axios.get("http://165.227.130.18:5000/");
      this.hakem = response.data;
      console.log(response.data)
    },

    methods: {
      filterItems(needle, heystack){
        let query = needle.toLowerCase();
        return heystack.filter(item => item.name.toLowerCase().indexOf(query) >= 0);
      },
      search(name){
        let found = this.filterItems(name, this.hakem)
        
        
        if(found.length == 0){
          this.result = "hakem bulunamadı"
        }else{
          this.result = found[0].name +"  hakem bulundu"
        }
      }
    }
  }
</script>

<style>
._container{
  display: flex;
  flex-direction: column;
}
.input-group{
  display: flex;
  justify-content: center;
  margin-top: 200px;
  padding-left: 300px;
  padding-right: 300px;
}
.info{
  display: flex;
  justify-content: center;
  padding-top: 100px;
  font-size: 30px;
}


@import'~bootstrap/dist/css/bootstrap.css'
</style>