<template>

<div class="container">

       <div class="plant-box">
            <div class="plant-img-div">
                <div class="heart-icon" ><img src="../../../assets/emptyheart.png" alt=""></div>
                <img class="plant-img" v-bind:src="'https:'+'//images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&w=1000&q=80'" /> 
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

        
</div>

<span>{{WatchlistPlant}}</span>
    
</template>

<style scoped>

.heart-icon{
    position: absolute;
    right: 2%;
}



.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

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
    width: 40%;
    border-radius: 10px;
    margin: 1%;
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
    font-size: 1em;
}

.plant-box h3{
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
}

.plant-img{
    width: 100%;
}


.plant-img-div{
    background-color: #CBEAD1;
    position: relative;
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


