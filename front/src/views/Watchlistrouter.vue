<template>
    

<div>
<h1>WATCHLIST</h1>

<watchlist v-for="(product) in productsData" :key="product._id" :ProductObject="product" />
   
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
import watchlist from "../components/account/modal/WatchList.vue"

defineProps({
  ProductObject: {
    type: Object,
    required: true
  }
})
</script>