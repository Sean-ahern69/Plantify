
<template>

<div class="container_box">


      <div class="input_container">

      <div>
        <img src="../../../assets/cross.png"><h1>ADD A LISTING</h1><h2>SAVE</h2>
      </div>

      
   <hr class="line" size="1" top="101px" width="109%" color="#CBEAD1">


        <input type="text" v-model="inputProductData.name" placeholder="Title" />
        <hr class="line2" size="1" top="50px" width="98.8181%" color="#CBEAD1">
        <div class="tags_title" >tags</div>
        <!-- <input type="text" style="height:20px;" v-model="inputProductData.description" placeholder="Tags" /> -->

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

        <hr class="line3" size="1"  width="98.8181%" color="#CBEAD1">
        <input type="text" v-model="inputProductData.price" placeholder="$ Price" />
         <hr class="line4" size="1" top="50px" width="98.8181%" color="#CBEAD1">
        <input type="text" v-model="inputProductData.photo" placeholder="Photo URL" />
        <hr class="line4" size="1" top="50px" width="98.8181%" color="#CBEAD1">
                <input type="text" v-model="inputProductData.location" placeholder="Location" />
        <hr class="line5" size="1" top="50px" width="98.8181%" color="#CBEAD1">
        <input type="text" v-model="inputProductData.description" placeholder="Description here" />
        <hr class="line5" size="1" top="50px" width="98.8181%" color="#CBEAD1">

        <div><button @click="addProduct" class="button"><h3>ADD</h3></button></div>
      </div>
</div>

</template>

<style scoped>
.container_box{
background-color: white;
}

hr.line{
  margin-top: 41px;
  margin-bottom: 1px;
  margin-right: -17.5px;
  margin-left: -17.5px;
}
.button {
  all: unset;
color: #4CAF50;
  background-color: #CBEAD1;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  /* position: absolute; */
  top: 150px;
  padding-right: 50px;
  padding-left: 50px;
  margin-left: 100px;
  margin-top: 10px;
  border-radius:3px;
    font-family: 'Poppins';
}

hr.line2{

  margin-bottom: 1px;
  margin-right: 30px;
}
hr.line3{
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: 30px;
}
hr.line4{
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: 30px;
}
hr.line5{
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: 30px;
}
img{
    height: 17.5px;
    padding-top: 1px;
}
div{
    display: flex;
    justify-content: space-between;
    

}

    h1{
     font-family: 'Poppins';
    font-weight: 600;
    color:darkcyan;
    text-align: center;
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
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

}

input {
  /*width: 290px;*/
  height: 30px;
  border-radius: 8px;
  border: 1px solid #ffffff;
}

.tags_title{
    height: 30px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  color: #cbead1;
   font-family: 'poppins';
   font-size: .8em;

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
      this.$router.push('/Home');
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


