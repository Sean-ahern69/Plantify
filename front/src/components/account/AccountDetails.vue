<script setup>
import AccountOptions from './AccountOptions.vue';
import userVue from '../login/user.vue';

</script>

<template>
  <div class="page_title">
    MY ACCOUNT 
  </div>  

  <div class="container">
      <div id="account_photo">
        <img src="https://media.istockphoto.com/photos/you-dont-need-someone-else-to-buy-you-flowers-picture-id1179997588?k=20&m=1179997588&s=612x612&w=0&h=VqpESQ5wyPscbT9dtq5LUccmcTNO55M7PQ-yHOCopJg=" alt="">
       </div> 
      <div class="info_wrap">
        <div class="title">Name</div>     
        <div class="info">{{ name }}</div>
      </div>
      <div class="info_wrap">
        <div class="title">Email</div>     
        <div class="info">{{ email }}</div>
      </div>
      <div class="info_wrap">
        <div class="title">Phone</div>     
        <div class="info">{{ phone }}</div>
      </div>
      <div class="info_wrap">
        <div class="title">Location</div>     
        <div class="info">{{ location }}</div>
      </div>
      <div class="info_wrap">
        <div class="title">Password</div>     
        <div class="info">{{ password }}</div>
      </div>
      

      
  </div>

  <div id="break"></div>

  <AccountOptions />
  

  
</template>


<script>
// import axios from 'axios'
export default {
  components: { AccountOptions },
  data() {
    return {      
        name: "" ,
        email:'',
        password:'',
        phone:'',
        location:'', 
    }
  },
  methods: {
  },

  async mounted(){
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    this.email = JSON.parse(user).email;
    this.password = JSON.parse(user).password;
    this.phone = JSON.parse(user).phone;
    this.location = JSON.parse(user).location;   
  },
};
</script>

<style scoped>

.page_title{
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    color: #329D9C;
    padding: 16px 0;
    border-bottom: 1px solid #CBEAD1;
    letter-spacing: 3px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 30px;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
}

#account_photo{
    text-align: center;
  font-size: 13px;
  color: #a8a8a8;
  margin-bottom: 20px;
}

#account_photo img{
    width: 100px;
    height: 100px;
    background: grey;
    border-radius: 50px;
    object-fit: cover;
}


.info_wrap {
  display: flex;
  width: 250px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  /* border-bottom: 1px solid #CBEAD1; */
  justify-content: center;
}

.title {
  display: inline-block;
  width: 100px;
  color: #73c088;
  font-weight: bold;
  text-align: right;
  margin-right: 20px;
}

.info {
  width: 100px;
  color: #a8a8a8;
}

button {
    display: inline-block;
    padding: 10px;
    margin: 0 70px;
    margin-top: 10px;
    background: #73c088;
    color: white;
    border: none;
    border-radius: 8px;
}

#break{
    width: 100%;
    height: 10px;
    background: #CBEAD1;
}
</style>