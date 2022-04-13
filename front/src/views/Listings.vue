
<template>


<div>

  <h1>LISTINGS</h1>

    


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


    <div class="container" >
    <MyListings v-for="PlantID in UserObject.listings" :key="PlantID" :PlantPropID="PlantID" />
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
      UserID:'6256025d7fbd79c629a9cb20', 
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

import AddListing from '../components/listings/modal/AddListing.vue';

import MyListings from "../components/listings/MyListings.vue"

import AddListingButtonVue from '../components/listings/AddListingButton.vue';



</script>

