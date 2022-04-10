<template>
   
   
    
<div v-for="item in itemList" :key="item.id">
    <!-- on click of the listing, check data if 'hidden' -->
     <div @click="item.isHidden = !item.isHidden"><PlantListing/></div> 
    <!--if it is, display the modal component -->
    <span v-if="item.isHidden" ><PlantModal/></span>
    <!--if it is already displayed, hide the component (display nothing)-->
        <span v-else></span>
</div>


</template>

<style scoped>
 

</style>

<script>
export default {
  data () {
     return {
       itemList: [{
        "id": 1,
        "isHidden": false
      },
    ],

     }
  }
}
</script>

<script setup>
import PlantListing from "./PlantListing.vue"
import PlantModal from "./modal/PlantModal.vue"


</script>