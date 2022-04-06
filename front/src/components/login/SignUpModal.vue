<script setup>
import userVue from "./user.vue";
</script>

<template>
  <div class="container">
    <div class="signUp_container">
      <h1>SIGN UP</h1>

      <div class="input_container">
        <input
          type="text"
          v-model="inputUserData.name"
          placeholder="USER NAME"
        />
        <input type="text" v-model="inputUserData.email" placeholder="EMAIL" />
        <input type="text" placeholder="CONFIRM EMAL" />
        <input
          type="text"
          v-model="inputUserData.password"
          placeholder="PASSWORD"
        />
        <input type="text" placeholder="CONFIRM PASSWORD" />
        <button @click="addUser" class="button">SIGN UP</button>
      </div>      
    </div>

    <div id="hide">
      <userVue
        v-for="user in usersData"
        :key="user._id"
        :userProp="user"
        @delUserEmit="delUser"
        @updUserEmit="updateUser"
      />
    </div>
  </div>
</template>

<style scoped>

#hide {
    height: 300px;
    margin-top: 50px;
    /* display: none; */
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #cbead1;
  height: 100vh;
  flex-wrap: wrap;
}

.signUp_container {
  text-align: center;
  background: white;
  padding: 50px 30px;
}

h1 {
  font-size: 34px;
  letter-spacing: 5px;
  color: #329d9c;
}

.input_container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

input {
  width: 290px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #cbead1;
  padding-left: 10px;
  margin-bottom: 10px;
}

::placeholder {
  color: #cbead1;
}

.button {
  padding: 10px;
  margin-top: 10px;
  background: #73c088;
  color: white;
  border: none;
  border-radius: 8px;
}
</style>

<script>
export default {
  data() {
    return {
      usersData: [],
      inputUserData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async fetchAPI() {
      const response = await fetch("http://localhost:4500/users/");
      const fetchedData = await response.json();
      this.usersData = fetchedData;
    },
    async addUser() {
      const response = await fetch("http://localhost:4500/users/adduser/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
      console.log("success");
    },
    async delUser(userID) {
      const fetchURL = "http://localhost:4500/users/delete/" + userID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
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

