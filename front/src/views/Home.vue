
<template>
<div class="background">

    <Tags/>
    <PlantContainer/>

    <!-- code for the filter icon to display modal on click -->

<div v-for="item in itemList" :key="item.id"  >
    <!-- on click of the filter icon, check data if 'hidden' -->
 <div @click="item.isHidden = !item.isHidden"><filtericon/></div> 
  <!--if it is, display the modal component -->
 <span v-if="item.isHidden" ><FilterModal/></span>
 <!--if it is already displayed, hide the component (display nothing)-->
  <span v-else></span>
</div>

</div>

<!-- <span>{{productsData[0]}}</span> -->

<!-- <h1 v-for="product in productsData" :key="product._id">{{product.name}}</h1> -->



</template>

<style scoped>
.background{
  padding-bottom: 40%;
}
</style>

<script>
export default{
  data(){
    return{
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

import Tags from "../components/home/Tags.vue";



import filtericon from '../components/home/FilterButton.vue';
import FilterModal from '../components/home/FilterModal.vue'

</script>
