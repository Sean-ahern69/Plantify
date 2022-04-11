<template>
   
   
    
<div>
    <div v-for="item in itemList" :key="item.id">
    <!-- on click of the listing, check data if 'hidden' -->
     <div @click="item.isHidden = !item.isHidden">
         <PlantListing v-for="(product, index) in productsData" :key="product._id" :ProductObject="product" :myIndex="index" />
         </div> 
    <!--if it is, display the modal component -->
    <span v-if="item.isHidden" ><PlantModal/></span>
    <!--if it is already displayed, hide the component (display nothing)-->
        <span v-else></span>
    </div>
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
       productsData:[{}],
       itemList: [{
        "id": 1,
        "isHidden": false
      },
    ],
     }
  },
  methods:{
       async fetchAPI(){
            const response = await fetch('http://localhost:4500/products/');
            const fetchedData = await response.json();
            this.productsData = fetchedData;
        }
  },
  created(){
    this.fetchAPI();
  }
}


</script>


<script setup>
import PlantListing from "./PlantListing.vue"
import PlantModal from "./modal/PlantModal.vue"
defineProps({
  ProductObject: {
    type: Object,
    required: true
  }
})

</script>