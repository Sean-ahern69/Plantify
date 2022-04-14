
<template>


<div>



    <div class="container" v-if="!isHidden" >
      <h1>LISTINGS</h1>
    <MyListings v-for="PlantID in UserObject.listings" :key="PlantID" :PlantPropID="PlantID"/>
    </div>


   <div>
      <div v-for="item in itemList" :key="item.id"  >
    <!-- on click of the filter icon, check data if 'hidden' -->
    <div @click="isHidden = !isHidden"><AddListingButtonVue class="add_listing_button" /></div> 
      <!--if it is, display the modal component -->
    <span v-if="isHidden" ><AddListing class="add_listing" /> </span>
    <!--if it is already displayed, hide the component (display nothing)-->
      <span v-else></span>
    </div>
    </div>

 

</div>



</template>

<style scoped>
.hidden{
  display: none;
}

h1{
     font-family: 'Poppins';
    font-weight: 600;
    color:     darkcyan;;
    text-align: center;
}

 .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    z-index: -2;
    margin-top: 20px;

}

.add_listing{
   z-index: 100;
}

.add_listing_button{
  z-index: 500;
}
</style>

<script>
export default {
  data () {
     return {
       itemList: [{
        "id": 1,
        "isHidden": false
      }
     
    ],
     isHidden: false,
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

