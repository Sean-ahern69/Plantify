<template>

<div class="modal_bkg" >

  <div class="modal_content" >
  <h1>FILTER</h1><h2>SAVE</h2>
  </div>

<div class="modal_buttons" >
  <h3>Price</h3>
  <input type="range" name="distanceInputName" id="distanceInputId" value="0" min="0" max="500">
    <output>24</output>
    <h3>Location</h3>
    <input type="text" >
</div>

 
</div>



</template>


<style scoped>

.modal_bkg{

width: 90%;
    height: 60%;
    background-color: white;
   position: absolute;
   left: 50%;
   top: 30%; 
   margin-left: -45%;
   margin-top: -30%;
       border-radius:10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    
}

.modal_content{
    display: flex;
    justify-content: space-between;
    margin: 15px;
}

.modal_buttons{

    margin: 30px;
}

h1{
    color: #329D9C;
    font-family: 'Poppins', sans-serif;
    font-size: 700;
    text-transform: uppercase;
}
h2{
    color: #73C088;
    text-decoration-line: underline;
    font-family: 'Poppins', sans-serif;
    font-size: 700;
    text-transform: uppercase;
}

h3{
    color: #329D9C;
    font-family: 'Poppins', sans-serif;
    font-size: 600;
    
}

input[type=range] {
    height: 25px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #b6d7d7;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #329D9C;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #329D9C;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
 
 



</style>
