<template>

    <h1>Home</h1>

<plantContainer/>

<!-- code for the filter icon to display modal on click -->

<div v-for="item in itemList" :key="item.id"  >
    <!-- on click of the filter icon, check data if 'hidden' -->
 <div @click="item.isHidden = !item.isHidden"><filtericon/></div> 
  <!--if it is, display the modal component -->
 <span v-if="item.isHidden" ><FilterModal/></span>
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
import PlantContainer from '../components/home/PlantContainer.vue';
import filtericon from '../components/home/FilterButton.vue';
import FilterModal from '../components/home/FilterModal.vue'
</script>