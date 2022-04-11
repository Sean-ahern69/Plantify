<template>

<div>
    <div class="logo">
        <h1>P L A N T I F Y</h1>
    </div>

    <div class="container">
        <div class="tags">
            <a href=""><h3>all</h3></a>
            <a href=""><h3>Indoor</h3></a>
            <a href=""><h3>Outdoor</h3></a>
            <a href=""><h3>Fruit & Veg</h3></a>
            <a href=""><h3>Tropical</h3></a>
            <a href=""><h3>Succulent</h3></a>
            <a href=""><h3>Easy</h3></a>
            <a href=""><h3>Exotic</h3></a>
        </div>
    </div>
</div>


    
</template>
    
<style scoped>



.logo {
    font-family: 'Poppins';
    font-weight: 600;
    color: #329D9C;
    display: flex;
    justify-content: center;
}

.tags{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
}
.tags a{
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
}
.tags a h3{
    font-weight: 300;
}
.container{
    padding: 5px;
    margin-bottom: 10px;
}
.tags a:active{
    background-color:#56C596;;
}
</style>

<script>

</script>

<script setup>

</script>