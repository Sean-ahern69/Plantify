<script setup>
import AccountOptions from './AccountOptions.vue';
import userVue from '../login/user.vue';

</script>

<template>
  <div class="page_title">
    MY ACCOUNT
  </div>

  <div class="container">
    <form action="">
      <div id="account_photo">
        <img src="https://media.istockphoto.com/photos/you-dont-need-someone-else-to-buy-you-flowers-picture-id1179997588?k=20&m=1179997588&s=612x612&w=0&h=VqpESQ5wyPscbT9dtq5LUccmcTNO55M7PQ-yHOCopJg=" alt="">
        <p>{{ usersData[0]._id }}</p>
       </div>  

      <div class="input_wrap">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="inputUserData.name" :placeholder="usersData[0].name" />
      </div>

      <div class="input_wrap">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="inputUserData.email" :placeholder="usersData[0].email" />
      </div>

      <div class="input_wrap">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="inputUserData.phone" placeholder="000 0000 0000" />
      </div>

      <div class="input_wrap">
        <label for="location"> Location </label>
        <input type="text" id="location" v-model="inputUserData.location" placeholder="Christchurch" />
      </div>

      <div class="input_wrap">
        <label for="password">Password</label>
        <input type="text" id="password" v-model="inputUserData.password" :placeholder="usersData[0].password" />
      </div>

      <button @click="updateUser">UPDATE PROFILE<br>-Not work yet(Error)-</button>
    </form>
  </div>

  <div id="break"></div>

  <userVue
    v-for="user in usersData"
    :key="user._id"
    :userProp="user"
    @delUserEmit="delUser"
    @updUserEmit="updateUser"
  />

  <AccountOptions />
  

  
</template>


<script>
export default {
  components: { AccountOptions },
  data() {
    return {
      usersData: [],
      inputUserData: {
        name: "",
        email: "",
        phone: "",
        location: "",
        password: ""
      },
    };
  },
  methods: {
    async fetchAPI() {
      const res = await fetch("http://localhost:4500/users/");
      const result = await res.json();
      this.usersData = result;
    },
    async updateUser(userID) {
      const fetchURL = "http://localhost:4500/users/update/" + userID;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<style scoped>

.page_title{
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
  margin: 20px 0;
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

form {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

.input_wrap {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 85px;
  color: #73c088;
  font-weight: bold;
  text-align: right;
  margin-right: 20px;
}

input {
  width: 190px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #cbead1;
  padding-left: 10px;
}

::placeholder {
    color: #a8a8a8
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