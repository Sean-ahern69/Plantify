
<template>




<div>

  <h1>LISTINGS</h1>

    <div class="container" >
    <MyListings/>
    </div>



    <div>
      <div v-for="item in itemList" :key="item.id"  >
    <!-- on click of the filter icon, check data if 'hidden' -->
    <div @click="item.isHidden = !item.isHidden"><AddListingButtonVue/></div> 
      <!--if it is, display the modal component -->
    <span v-if="item.isHidden" ><AddListing/></span>
    <!--if it is already displayed, hide the component (display nothing)-->
      <span v-else></span>
    </div>
    </div>
</div>



</template>

<style scoped>
h1{
     font-family: 'Poppins';
    font-weight: 600;
    color: #329D9C;
    text-align: center;
}

 .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}


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



import AddListing from '../components/listings/modal/AddListing.vue';

import MyListings from "../components/listings/MyListings.vue"

import AddListingButtonVue from '../components/listings/AddListingButton.vue';


</script>

