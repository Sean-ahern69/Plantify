<template>

    <div class="div">
        <img src="../../../assets/cross.png"><h1>LISTING</h1><h2>SAVE</h2>
    </div>
   <hr size="1" top="101px" width="100%" color="#CBEAD1">
   <div id="square">
       <square width="190px" height="190px"></square>
    </div>

        <div class="input_container">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="price" placeholder="Price" />
        <input type="text" v-model="description" placeholder="Description" />
        <input type="text" v-model="photo" placeholder="Photo URL" />
        <input type="text" v-model="location" placeholder="Loaction" />

      </div>

</template>

<style scoped>
img{
    height: 17.5px;
    padding-top: 1px;
}
div{
    display: flex;
    justify-content: space-between;
    padding-top: 61px;
    padding-left: 20px;
    padding-right: 20px;
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

#square {
    height: 190px;
    width: 190px;
    color: #FFFFFF;
    border : #CBEAD1 1px solid;
    margin-left: 40%;
    margin-right: 40%;
}

</style>




