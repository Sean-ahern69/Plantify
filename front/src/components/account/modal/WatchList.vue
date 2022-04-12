<template>

     
    <div class="plant-box">
        <div class="plant-img">
            <img :src="WatchlistPlant.photo">
        </div>
        <div class="box-info">
            <div class="intials">
                <h4>KJ</h4>
            </div>
            <div class="box-price">
                <h1>{{WatchlistPlant.name}}</h1>
                <h3>${{WatchlistPlant.price}}</h3>
            </div>

        </div>
    </div>
    
    
</template>

<style scoped>


.intials{
    background-color: #F4BBBB;
    border-radius: 20px;
    width: 30px;
    height: 20px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
    font-weight: 200;
    margin-left: 12px;
}

.plant-box{
    display: flex;
    flex-direction: column;
    width: 45%;
    border-radius: 10px;
    margin: 2%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    
}
.box-info{
    display: flex;
    align-items: center;
    justify-content: center;
}
.box-price{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    padding-left: 8px;
}
.plant-box h1{
    color: darkcyan;
    margin: 0;
    font-size: .8em;
}

.plant-box h3{
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
}

.plant-img img{
    width: 100%;
    height: 100%;
}

.plant-img{
    background-color: #CBEAD1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}



</style>

<script setup>
defineProps({
  PlantPropID: {
    type: String,
    required: true,
  }
})
</script>


<script>
export default {
  data () {
     return {
       WatchlistPlant:{}

     }
  },
  
  methods:{
       async fetchAPI(){
            const response = await fetch('http://localhost:4500/products/get/'+this.PlantPropID);
            const fetchedData = await response.json();
            this.WatchlistPlant = fetchedData;   
        }
  },

  created(){
    this.fetchAPI();
  }
}

</script>


