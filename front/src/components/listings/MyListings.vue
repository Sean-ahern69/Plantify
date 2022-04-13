<template>
<div class="head">
<h1>MY LISTINGS</h1>
</div>

<div class="popular-container">
  <div class="popular">
  <div class="popular-card">
  <img src="../" alt="">
  <h2>PEACE LILY</h2>
  <img src="../../assets/cross.png" alt="">
  <p>Closes: Sun 3rd Apr</p>
  <h1>$35</h1>
</div>
</div>
</div>

<div class="popular-container">
  <div class="popular">
  <div class="popular-card">
  
  <h2>PEACE LILY</h2>
  <p>Closes: Sun 3rd Apr</p>
  <h1>$35</h1>
</div>
</div>
</div>

<div class="popular-container">
  <div class="popular">
  <div class="popular-card">
  <img src="../" alt="">
  <h2>PEACE LILY</h2>
  <p>Closes: Sun 3rd Apr</p>
  <h1>$35</h1>
</div>
</div>
</div>

<div class="popular-container">
  <div class="popular">
  <div class="popular-card">
  <h2>PEACE LILY</h2>
  <p>Closes: Sun 3rd Apr</p>
  <h1>$35</h1>
</div>
</div>
</div>

<div class="popular-container">
  <div class="popular">
  <div class="popular-card">
  <h2>PEACE LILY<h3>Pending Sale</h3></h2>
  <p>Closes: Sun 3rd Apr</p>
  <h1>$35</h1>
</div>
</div>
</div>
    

</template>

<style scoped>
.head {
    font-family: 'poppins';
    color: darkcyan;
    text-align: center;
    margin-bottom: 10px;
}
h2 {
  display: inline;
}
.popular{
    width: 90%;
    display: flex;
    padding: 20px;
    justify-content: center;
}
.popular img {
  padding-left: 20px ;
}
.popular-card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 35%;
    margin: 10px;
    background-color: #CBEAD1;
    border-radius: 10px;
    font-family: 'poppins';
    
}
.popular-card h1 {
  font-weight: 300;
}
.popular-card h2 {
  color: darkcyan;
  font-size: 25px;
}
.popular-card h2 h3 {
  display: inline-block;
}
.popular-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>

<script>

</script>

<script setup>

</script>