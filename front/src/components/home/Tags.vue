<template>
    <div class="container">
        <div class="logo">
            <h1>PLANTIFY</h1>
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
