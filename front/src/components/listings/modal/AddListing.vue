

<template>

<div class="container_box">


   <div id="square">
       <square width="190px" height="190px"></square>
    </div> 

      <div class="input_container">

      <div>
        <img src="../../../assets/cross.png"><h1>LISTING</h1><h2>SAVE</h2>
      </div>

      
   <hr class="line" size="1" top="101px" width="109%" color="#CBEAD1">

        <input type="text" v-model="inputProductData.name" placeholder="Name" />
        <input type="text" v-model="inputProductData.price" placeholder="Price" />
        <input type="text" style="height:100px;" v-model="inputProductData.description" placeholder="Description" />
        <input type="text" v-model="inputProductData.photo" placeholder="Photo URL" />
        <input type="text" v-model="inputProductData.location" placeholder="Location" />

        <a href=""><button @click="addProduct" class="button">Add</button></a>
      </div>



     <div class="container">
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
</div>

</template>

<style scoped>
.container_box{
flex-direction: column;
}
/* div .container{
  margin-right: 20px;
  margin-left: 20px;
} */
hr.line{
  margin-top: 41px;
  margin-bottom: 30px;
  margin-right: -17.5px;
  margin-left: -17.5px;
}
img{
    height: 17.5px;
    padding-top: 1px;
}
div{
    display: flex;
    justify-content: space-between;
    /*padding-top: 61px;*/
}
h1{
    color: #329D9C;
    background: #FFFFFF;
    justify-content: space-between;
    font-family: 'Poppins';
    letter-spacing: 0.28em;
    font-size: 106.25%;

}

h2{
    color: #73C088;
    background: #FFFFFF;
    justify-content: space-between;
    text-decoration-line: underline;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 81.25%;
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
    padding-left: 10px;
    padding-right: 10px;
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
    margin-bottom: 10px;
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

/* #square {
    height: 190px;
    width: 190px;
    color: #FFFFFF;
    border : #CBEAD1 1px solid;
    margin-left: 40%;
    margin-right: 40%;
} */

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



