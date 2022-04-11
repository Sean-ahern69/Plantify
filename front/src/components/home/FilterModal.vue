<template>

<div class="close_modal" ></div>

    <div class="modal_bkg" >

        <div class="modal_content" >
        <h1>FILTER</h1><h2>SAVE</h2>
        </div>

        <div class="modal_buttons" >
        <h3>Price</h3>

        <div>
          <div class="output">
          <Slider v-model="value" />
        </div>
        </div>


          <h3>Location</h3>
          <input type="text" >
      </div>

    </div>
 


</template>


<script>
  import Slider from '@vueform/slider'

  export default {
    components: {
      Slider,
    },
    data() {
      return {
        value: 20
      }
    }
  }
</script>


<style src="@vueform/slider/themes/default.css"></style>

<style>

.slider-connect{
  background: var(--slider-connect-bg,#56C596);

}

.slider-tooltip{
  background: var(--slider-tooltip-bg,#56C596);
  border: 1px solid var(--slider-tooltip-bg,#56C596);
}
</style>

<style scoped>

.close_modal{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(26, 25, 25, 0.644);
  z-index: 0;
}

.output {
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
  
}

.modal_bkg{

width: 90vw;
  height: 40%;
  background-color: white;
   position: fixed;
  left: 50%;
  top: 63%;
  transform: translate(-50%, -50%);
    border-radius:10px;
    border: 5px solid #73C088;
 
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

 



</style>
