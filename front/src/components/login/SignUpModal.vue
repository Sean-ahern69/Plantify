<script setup>
    import userVue from './user.vue'
</script>

<template>

  <div>
    <h1>SIGN UP</h1>
    <div class="input_wrap">
      <input type="text" v-model="inputUserData.name" placeholder="USER NAME" />
      <input type="text" v-model="inputUserData.email" placeholder="EMAIL" />
      <input type="text" placeholder="CONFIRM EMAL" />
      <input type="text" v-model="inputUserData.password" placeholder="PASSWORD" />
      <input type="text" placeholder="CONFIRM PASSWORD" />
    </div>
    <button @click="addUser">SIGN UP</button>
  </div>

  <userVue
    v-for="user in usersData"
    :key="user._id"
    :userProp="user"
    @delUserEmit="delUser"
    @updUserEmit="updateUser"
  />

</template>

<style scoped>
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
      console.log('success');
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

