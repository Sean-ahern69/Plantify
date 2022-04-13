<template>
<div class="head">

</div>

<div class="plant-box">

      <div class="plant-box-child plant-box-child-1">
        <img src="../../assets/PeaceLily.png" alt="" class="plant-img">
      </div>

      <div class="popular-card plant-box-child plant-box-child-2">
            <h2>PEACE LILY</h2>
            <img src="../../assets/cross.png" alt="">
            <p>Closes: Sun 3rd Apr</p>
            <h1>$35</h1>
      </div>

</div>

  <!-- <div class="plant-box">
      <div class="popular">

        <div class="popular-card">
          <img src="../../assets/PeaceLily.png" alt="">
          <h2>PEACE LILY</h2>
          <img src="../../assets/cross.png" alt="">
          <p>Closes: Sun 3rd Apr</p>
          <h1>$35</h1>
        </div>

      </div>
</div> -->


</template>

<style scoped>

.popular-card h2{
    color: darkcyan;
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
}

.plant-box-child{
  width: 50%;
}

.plant-box-child-1{
flex-basis: 30%;
}

.plant-img{
    width: 100%;
    height: 100%;
}

.plant-box{
    width: 60%;
    margin: 10px;
    background-color: #CBEAD1;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    
}


</style>

<script>

</script>

<script setup>

</script>