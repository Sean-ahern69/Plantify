<template>
 
    <div class="modal_bkg" >
        <div class="modal_content" >
        <h1>FILTER</h1><h2>SAVE</h2>
        </div>

        <div class="modal_slider" >
        <input type="range" name="distanceInputName" id="distanceInputId" value="0" min="0" max="500">
        </div>
        

    </div>

</template>

<script>

</script>

<script setup>

</script>

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

.modal_slider{

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


input[type=range] {
    height: 25px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type=range]:focus {
    outline: none;
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
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #329D9C;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #329D9C;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #329D9C;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #329D9C;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #329D9C;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-fill-upper {
    background: #329D9C;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #329D9C;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #329D9C;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #329D9C;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #329D9C;
  }


  input[type=text]{
  padding: 10px 20px;
  width: 70%;
  display: inline-block;
  border: 2px solid rgb(95, 94, 94);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 2px 2px #afaeae;
  }

  input[type=number]{
    padding: 10px 20px;
    width: 70%;
    display: inline-block;
    border: 2px solid rgb(95, 94, 94);
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 2px 2px #afaeae;
    }


</style>
