<template>
<div>
        <div class="tags">
            <div class="tag_style" @click="filtering.tags.ShowAll= !filtering.tags.ShowAll" :class="{tag_true:filtering.tags.ShowAll}"><h3>All</h3></div>
            <div class="tag_style" @click="filtering.tags.Outdoor= !filtering.tags.Outdoor" :class="{tag_true:filtering.tags.Outdoor}"><h3>Outdoor</h3></div>
            <div class="tag_style" @click="filtering.tags.Indoor= !filtering.tags.Indoor" :class="{tag_true:filtering.tags.Indoor}"><h3>Indoor</h3></div> 
            <div class="tag_style" @click="filtering.tags.FruitVeg= !filtering.tags.FruitVeg" :class="{tag_true:filtering.tags.FruitVeg}"><h3>Fruit & Veg</h3></div>
            <div class="tag_style" @click="filtering.tags.Tropical= !filtering.tags.Tropical" :class="{tag_true:filtering.tags.Tropical}"><h3>Tropical</h3></div>
            <div class="tag_style" @click="filtering.tags.Succulent= !filtering.tags.Succulent" :class="{tag_true:filtering.tags.Succulent}"><h3>Succulent</h3></div>
            <div class="tag_style" @click="filtering.tags.Easy= !filtering.tags.Easy" :class="{tag_true:filtering.tags.Easy}"><h3>Easy</h3></div>
            <div class="tag_style" @click="filtering.tags.Exotic= !filtering.tags.Exotic" :class="{tag_true:filtering.tags.Exotic}"><h3>Exotic</h3></div>
        </div>
   
    <div class="container">

    


        <div v-for="(product, index) in productsData" :key="product._id" class="plant">
         <PlantListing 
            @click="popModal(index)" 
            :ProductObject="product" 
            :myIndex="index"
            v-if=" ( filtering.tags.Outdoor && product.tags.Outdoor ) ||
                   ( filtering.tags.Indoor && product.tags.Indoor  ) ||
                   ( filtering.tags.FruitVeg && product.tags.FruitVeg  ) ||
                   ( filtering.tags.Tropical && product.tags.Tropical  ) ||
                   ( filtering.tags.Succulent && product.tags.Succulent  ) ||
                   ( filtering.tags.Easy && product.tags.Easy  ) ||
                   ( filtering.tags.Exotic && product.tags.Exotic  ) ||
                    filtering.tags.ShowAll
            " 
           />
            
    </div>
 

    <div v-if="showModal" id="modal_container">
        <PlantModal :ProductObject="productsData[modalListing]" @closeModel="popModal(index)" />
    </div>

</div>

</div>
</template>

<style scoped>

.plant{
    display: flex;
    flex-direction: column;
    width: 45%;
    border-radius: 10px;
    margin: 2%;
}

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


.tags{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
}
.tag_style{
    text-decoration: none;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 2px;
    margin-left: 3px;
    color: white;
    background-color: lightgray;
    font-family: 'poppins';
    font-weight: 200;
    font-size: .8em;
    border-radius: 5px;
    text-transform: uppercase;
}
.tags a h3{
    font-weight: 300;
}

.tag_true{
    background-color:#56C596;;
}

.input_container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
 
  padding-left: 20px;
  padding-right: 20px;

}

input {
  /*width: 290px;*/
  height: 30px;
  border-radius: 8px;
  border: 1px solid #cbead1;
}

::placeholder {
  color: #cbead1;

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
        modalListing:0,
        filtering:{
            tags:{Outdoor:false, Indoor:false, FruitVeg:false, Tropical:false, Succulent:false, Easy:false, Exotic:false, ShowAll:true}
        }
        
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