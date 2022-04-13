<template>

 
    <div class="plant-box" >
       <div :class="{hidden:ishidden}" >
        <div class="plant-img"  >
             <div class="empty_heart heart_icon" @click="heartfunction()" :class="{full_heart:inwatchlist}" ></div>
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
    </div>

   
</template>

<style scoped>
.heart_icon{
    width: 70px;
    height: 70px;
    position: absolute;
    
}

.hidden{
    display: none;
}

.empty_heart{
    background-image: url("../../../assets/emptyheart.png") ;
 background-repeat: no-repeat;
 
}

.full_heart{
    background-image: url("../../../assets/fullheart.png") ;
 background-repeat: no-repeat;
 
}

.heart_icon{
    position: absolute;
    width: 70px;
    right: 0;
    
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
    width: 45%;
    border-radius: 10px;
    margin: 2%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: relative;
  
    
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
       WatchlistPlant:{},
       UserObject:{},
       inwatchlist: true,
       ishidden:false

     }
  },
  
  methods:{
       async fetchAPI(){
            const response = await fetch('http://localhost:4500/products/get/'+this.PlantPropID);
            const fetchedData = await response.json();
            this.WatchlistPlant = fetchedData;   
        },
            async getUserbyID(){
            const response = await fetch('http://localhost:4500/users/get/6256025d7fbd79c629a9cb20');
            const fetchedData = await response.json();
            this.UserObject = fetchedData; 
            },

        heartfunction(item){
    if ((this.UserObject.watchlist.includes(this.PlantPropID)) === true) {
        this.inwatchlist = false;
        this.ishidden = true;
        console.log(this.inwatchlist);
         console.log(this.ishidden);
        // console.log('function returns true');
        // this.UserObject.watchlist.push(this.PlantPropID);

        // const newarray = this.UserObject.watchlist.filter((item) =>item !== this.PlantPropID)
        // console.log(newarray);
        // newarray = this.UserObject.watchlist;

        // const removeItem = (arr,item) =>{
        //     let newarray = [...arr];
        //     const index = newarray.findIndex((element)=> element === item);
        //     if(index !== -1){
        //         newarray.splice(index,1)
        //         return newarray
        //     }
        // }
        // console.log(removeItem(this.UserObject.watchlist,this.PlantPropID))
    }


// push this.this.PlantPropID into the UserID.watchlist array if it isn't already in it
        }
  },

  created(){
    this.fetchAPI();
    this.getUserbyID();
  }
}

</script>


