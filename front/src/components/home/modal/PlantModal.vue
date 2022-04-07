<script setup>
import PlantDetails from "./PlantDetails.vue";
import BuyNow from "./BuyNow.vue";
</script>




<template>
    <div class="background">
        <div class="plant-image">
        <img :src="peacelily">
        </div>

        <div class="plant-dets">
            <PlantDetails/>
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
    .background{
        background-color: #CBEAD1;
        height: 140vh;
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
      peacelily: './src/assets/PeaceLily.png'
    }
  }
}

</script>

