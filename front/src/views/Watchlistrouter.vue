<template>
    

<div>
<h1>WATCHLIST</h1>

<watchlist v-for="ID in WatchlistIDs" :key="ID" :PlantPropID="ID" />
   
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
      WatchlistIDs:'625360269c728a6114deb7e2',
       UserID:'6254192132479808b07ffcbe'
     }
  }
}

</script>

<script setup>

import watchlist from "../components/account/modal/WatchList.vue"

</script>