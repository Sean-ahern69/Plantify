<template>
    
<div>
<h1>WATCHLIST</h1>

<watchlist v-for="PlantID in WatchlistIDs" :key="PlantID" :PlantPropID="PlantID" />
   
</div>
</template>

<style scoped>
h1{
     font-family: 'Poppins';
    font-weight: 600;
    color: #329D9C;
    text-align: center;
}
</style>

<script>
export default {
  data () {
     return {
      WatchlistIDs:['62535638a3fa466b9506b441','62535f559c728a6114deb7cf','62535fdb9c728a6114deb7dc'],
       UserID:'6254192132479808b07ffcbe'
     }
  }
}

</script>

<script setup>

import watchlist from "../components/account/modal/WatchList.vue"

</script>