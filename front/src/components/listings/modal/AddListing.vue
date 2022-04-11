<template>
      <div class="input_container">
        <input type="text" v-model="inputProductData.name" placeholder="Name" />
        <input type="text" v-model="inputProductData.price" placeholder="Price" />
        <input type="text" style="height:100px;" v-model="inputProductData.description" placeholder="Description" />
        <input type="text" v-model="inputProductData.photo" placeholder="Photo URL" />
        <input type="text" v-model="inputProductData.loaction" placeholder="Location" />

        <a href=""><button @click="addProduct" class="button">Add</button></a>
      </div>
</template>

<style scoped>
.input_container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

input {
  width: 290px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #cbead1;
  padding-left: 10px;
  margin-bottom: 10px;
}

::placeholder {
  color: #cbead1;
}
</style>




<script>

export default {
  data() {
    return {
      productsData: [],
      inputProductData: {
        name: "",
        price: "",
        description: "",
        photo: "",
        location: "",
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