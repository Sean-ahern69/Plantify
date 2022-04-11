<template>

  

<!-- code for the add listing icon to display modal on click -->

<div v-for="item in itemList" :key="item.id"  >
    <!-- on click of the filter icon, check data if 'hidden' -->
 <div @click="item.isHidden = !item.isHidden"><AddListingButtonVue/></div> 
  <!--if it is, display the modal component -->
 <span v-if="item.isHidden" ><AddListing/></span>
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






import AddListingButtonVue from '../components/listings/AddListingButton.vue';
import AddListing from '../components/listings/modal/AddListing.vue'


</script>