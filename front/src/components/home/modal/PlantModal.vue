<script setup>
import PlantDetails from "./PlantDetails.vue";
import BuyNow from "./BuyNow.vue";
defineProps({
  ProductObject: {
    type: Object,
    required: true
  }
})
</script>




<template>
    <div class="background">
        <div class="plant-image">
        <img :src="ProductObject.photo">
        </div>

        <div class="plant-dets">
            <img :src="cross" @click="$emit('closeModel')">
            <PlantDetails :ProductObject="ProductObject" />
        </div>

        <div class="buy-now">
            <BuyNow/>
        </div>
    </div>
    
</template>

<style scoped>
  
  .plant-image{
      background-color: #CBEAD1;
      height: 50vh;
      width: 100%;
  }
    .plant-image img{
        width: 100%;
        height: 100%;
    }

    .plant-dets{
       width: 90%;
       position: absolute;
       left:0;
        right:0;
        top:40%;
        margin-left:auto;
        margin-right:auto;  
       background-color: white;

    }
    .plant-dets img{
        
        padding: 5px;
        width: 7%;
    }
    .background{
        background-color: #CBEAD1;
        height: 134%;
    }

    .buy-now{
        position: fixed;
        bottom: 90px;
        width: 100%;
    }
    
</style>

<script>
export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      peacelily: './src/assets/PeaceLily.png',
      cross: './src/assets/cross.png'
    }
  },
  emits:['closeModel']
}

</script>

