<template>
    
<div>
<h1 class="h1_space" >WATCHLIST</h1>


<div class="container" >
<watchlist v-for="PlantID in UserObject.watchlist" :key="PlantID" :PlantPropID="PlantID" />
</div>

</div>
</template>

<style scoped>
 .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

}
.h1_space{
    margin-top: 20px;
}

h1{
     font-family: 'Poppins';
    font-weight: 600;
    color:     darkcyan;;
    text-align: center;
}
</style>

<script>
export default {
  data () {
     return {
       UserID:'6256025d7fbd79c629a9cb20',   //CHANGE this user ID to show up specific users watchlist
       UserObject:{}
     }
  },
  methods:{
    async getUserbyID(){
      const response = await fetch('http://localhost:4500/users/get/'+this.UserID);
            const fetchedData = await response.json();
            this.UserObject = fetchedData;  
    }
  },
  created(){
    this.getUserbyID();
}
}

</script>

<script setup>

import watchlist from "../components/account/modal/WatchList.vue"

</script>