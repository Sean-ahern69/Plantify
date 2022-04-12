<template>
   
   
    
<div class="wrapper">

    <div class="container">
         <PlantListing 
            @click="popModal(index)" 
            v-for="(product, index) in productsData" 
            :key="product._id" 
            :ProductObject="product" 
            :myIndex="index"/>
    </div> 

    <div v-if="showModal" id="modal_container">
        <PlantModal :ProductObject="productsData[modalListing]" @closeModel="popModal(index)" />
    </div>
    


</div>


</template>

<style scoped>



#modal_container {
    position: fixed;
    top:0;
    left:0;
    right: 0;
    background: white;
    height: 100vh;
    z-index: 10;
    overflow-y: scroll;
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
    components: {
        PlantModal
    },
  data () {
     return {
        showModal:false, 
        productsData:[{}],
        modalListing:0
     }
  },
  methods:{
      popModal(index){
          this.modalListing = index;
          this.showModal = !this.showModal;
          console.log('hello');
      },
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
import PlantListing from "./PlantListing.vue";
import PlantModal from "./modal/PlantModal.vue";

defineProps({
  ProductObject: {
    type: Object,
    required: true
  }
})

</script>