<template>
<div class="container">

       <div class="plant-box">
        <div class="plant-img">
            <img src="https://www.pngitem.com/pimgs/m/67-678433_small-houseplant-png-transparent-png.png" alt="doom-creeper">
        </div>
            <div class="box-info">
                <div class="intials">
                    <h4>KJ</h4>
                </div>
                <div class="box-price">
                    <h1>Monstera</h1>
                    <h3>$35</h3>
                </div>

             </div>
        </div>
        
       <div class="plant-box">
        <div class="plant-img">
            <img src="https://www.pngitem.com/pimgs/m/67-678433_small-houseplant-png-transparent-png.png" alt="doom-creeper">
        </div>
            <div class="box-info">
                <div class="intials">
                    <h4>KJ</h4>
                </div>
                <div class="box-price">
                    <h1>Monstera</h1>
                    <h3>$35</h3>
                </div>

             </div>
        </div>
        


</div>

</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.intials{
    background-color: #F4BBBB;
    border-radius: 20px;
    width: 30px;
    height: 20px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
    font-weight: 200;
    margin-left: 12px;
}

.plant-box{
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 10px;
    margin: 1%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    
}
.box-info{
    display: flex;
    align-items: center;
    justify-content: center;
}
.box-price{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    padding-left: 8px;
}
.plant-box h1{
    color: darkcyan;
    margin: 0;
    font-size: 1em;
}

.plant-box h3{
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
}

.plant-img img{
    width: 100%;
    height: 100%;
}

.plant-img{
    background-color: #CBEAD1;
}
</style>

<script>

</script>

<script setup>

</script>