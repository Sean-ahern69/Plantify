<template>



<div class="plant-box">

      <div class="plant-box-child plant-box-child-1">
         <img :src="mylistingplant.photo" class="plant-img">
      </div>

      <div class="popular-card plant-box-child plant-box-child-2">
            <h2>{{mylistingplant.name}}</h2>
            <h3>${{mylistingplant.price}}</h3>
            <div class="status" >Status: LISTED</div>
            
      </div>

      <div class="edit-icons plant-box-child plant-box-child-3">
         <img src="../../assets/pencil.png" alt="" >

         <img src="../../assets/greenx.png" alt="" >
      </div>


</div>



</template>

<style scoped>
.status{
  color: #73C088;
  background-color: rgba(255, 255, 255, 0.747);
  padding: 3px;
  border: 3px solid #73c088c4 ;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
}
.edit-icons{
  display: flex;
  padding-right: 5px;
}

.edit-icons img{
  width:20px;
}

.plant-box-child-1{
  width: 30%;
}

.plant-box-child-3{
  width: 10%;
  align-self: center;
}

.plant-box-child-2{
  align-self: center;
  width: 50%;
}

.popular-card h2{
    color: darkcyan;
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
}

.popular-card h3{
    color: rgb(87, 87, 87);
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 500;
}


.plant-img{
    width: 100%;
    height: 100%;
}

.plant-box{
    width: 80%;
    padding: 20px 10px 20px 10px;
    margin: 10px;
    background-color: #CBEAD1;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   align-items: start;
   justify-content: space-between;
}


</style>

<script>
export default{
  data (){
    return {
      mylistingplant:{}
    }
  },
    methods:{
       async fetchAPI(){
            const response = await fetch('http://localhost:4500/products/get/'+this.PlantPropID);
            const fetchedData = await response.json();
            this.mylistingplant = fetchedData; 
              
       }
    },
    created(){
    this.fetchAPI();
  }
}

</script>

<script setup>
defineProps({
  PlantPropID: {
    type: String,
    required: true,
  }
})
</script>