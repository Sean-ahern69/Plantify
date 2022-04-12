<template>
    <div class="container">
        <div class="logo">
            <h1>PLANTIFY</h1>
        </div>

        <div class="tags">
            <div class="tag_style" @click="inputProductData.tags.Indoor= !inputProductData.tags.Indoor" :class="{tag_true:inputProductData.tags.Indoor}"><h3>Indoor</h3></div> 
            <div class="tag_style" @click="inputProductData.tags.Outdoor= !inputProductData.tags.Outdoor" :class="{tag_true:inputProductData.tags.Outdoor}"><h3>Outdoor</h3></div>
            <div class="tag_style" @click="inputProductData.tags.FruitVeg= !inputProductData.tags.FruitVeg" :class="{tag_true:inputProductData.tags.FruitVeg}"><h3>Fruit & Veg</h3></div>
            <div class="tag_style" @click="inputProductData.tags.Tropical= !inputProductData.tags.Tropical" :class="{tag_true:inputProductData.tags.Tropical}"><h3>Tropical</h3></div>
            <div class="tag_style" @click="inputProductData.tags.Succulent= !inputProductData.tags.Succulent" :class="{tag_true:inputProductData.tags.Succulent}"><h3>Succulent</h3></div>
            <div class="tag_style" @click="inputProductData.tags.Easy= !inputProductData.tags.Easy" :class="{tag_true:inputProductData.tags.Easy}"><h3>Easy</h3></div>
            <div class="tag_style" @click="inputProductData.tags.Exotic= !inputProductData.tags.Exotic" :class="{tag_true:inputProductData.tags.Exotic}"><h3>Exotic</h3></div>
        </div>
    </div>
</template>




<style scoped>

.logo{
    font-family: 'poppins';
    color: darkcyan;
    text-align: center;
    margin-bottom: 10px;
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
.container{
    padding: 20px;
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
    tagNames:{
    Outdoor:'Outdoor', Indoor:'Indoor', FruitVeg:'Fruit & Veg',
    Tropical:'Tropical', Succulent:'Succulent', Easy:'Easy', Exotic:'Exotic'
},

  data() {
    return {
      productsData: [],
      inputProductData: {
        name: "",
        price: "",
        description: "",
        photo: "",
        location: "",
        tags:
          {Outdoor:false, Indoor:false, FruitVeg:false, Tropical:false, Succulent:false, Easy:false, Exotic:false}
        
      },
    };
  },
  computed: {
		filteredProducts: function() {
			var vm = this;
			var category = vm.selectedTags;
			
			if(category === "All") {
				return vm.productsData;
			} else {
				return vm.product.filter(function(product) {
					return product.tags === tags;
				});
			}
		}
	},
  methods: {
    async fetchAPI() {
      const response = await fetch("http://localhost:4500/products/");
      const fetchedData = await response.json();
      this.productsData = fetchedData;
    },
    async addProduct() {
      const response = await fetch("http://localhost:4500/products/addproduct/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputProductData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
      console.log("success");
    },
    async delProduct(productID) {
      const fetchURL = "http://localhost:4500/products/delete/" + productID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async updateProduct(productID) {
      const fetchURL = "http://localhost:4500/products/update/" + productID;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputProductData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
  },
  created() {
    this.fetchAPI();
  },
};



</script>

<script setup>

</script>
