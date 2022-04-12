<template>
<div>
    <div class="container">
        <div class="plant">
            <div class="tags">
                <h3>{{ProductObject.tags}}</h3>
                <img :src="hearticon">
            </div>
            <div class="title">
                <h1>{{ProductObject.name}}</h1>
            </div>
            <div class="info">
                <p>{{ProductObject.description}}</p>
               <br> <p>Location: {{ProductObject.location}}</p>
               <p>Pick up only</p>
            </div>
        </div>
    </div>

     <div class="com-title">
            <h4>Comments</h4>
        </div>
        <div>
            <div class="com-container">
                <div class="comment">
                    <div class="intials">
                    <h4>MS</h4>
                    </div>
                    <div class="com-details">
                        <h4>Mustafa Shafiyee</h4>
                        <p>Her plant collection is healthy and wonderful.</p>
                    </div>
                </div>
                <hr>
                <br>
                <div class="input_container">
                    <input type="text" v-model="comment" placeholder="Type a new comment" />
                    <img :src="sendicon">
                </div>

            </div>
        </div>
    


</div>
</template>

<style scoped>
input {
  width: 290px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #cbead1;
  padding-left: 10px;
  font-family: 'poppins';

}

.input_container img{
    padding: 5px;
}

.input_container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: 5px;
    
}



.container{
    padding: 10px;
    padding-top: 10%;
}
.plant{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.tags{
    display: flex;
    justify-content: space-between;
    font-family: 'poppins';
    color: #56C596;
}
.tags img{
    max-width: 10%;
}
.title{
    font-family: 'poppins';
    color: #329D9C;
}

.info{
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'poppins';

}

.com-title{
    background-color:#56C596 ;
    font-family: 'poppins';
    color: white;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 15px;
}

.com-container{
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'poppins';
    font-size: 12px;
    position: relative;
}

.comment{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
}

.intials{
    background-color: #F4BBBB;
    border-radius: 20px;
    width: 28px;
    height: 25px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
    font-weight: 200;
    font-size: 20px;
    margin-left: 5px;
    margin-right: 5px;
}

hr{
    width: 90%;
}


</style>

<script>

export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      hearticon: './src/assets/asset 2.png',
      sendicon: './src/assets/Group 28.png',
      comment:''
    }
  }
}
</script>

<script setup>
defineProps({
  ProductObject: {
    type: Object,
    required: true
  }
})
</script>

