<template>
  <div class="container">
    <div class="Login_container">
      <h1>LOG IN</h1>
      <div class="input_container">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="passworld" v-model="password" placeholder="Password" />

        <!-- <router-link to="/Home" class="button">LOG IN</router-link> -->
        <button class="button" @click="login">LOG IN</button>

        <p>Don't have account? <a @click="showModal = true">SIGN UP</a></p>
      </div>
    </div>

    <div v-if="showModal" id="modal_container">
      <SignUpModal @closeModalEmit="showModal = false" />
    </div>

    <h2>PLANTIFY</h2>
  </div>
</template>

<style scoped>
#modal_container {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  height: 100vh;
}

#closeModal {
  position: fixed;
  bottom: 20%;
  left: 30%;
  background: white;
  padding: 10px;
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

.Login_container {
  text-align: center;
  background: white;
  padding: 50px 30px;
}

h1 {
  font-family: "Poppins", sans-serif;
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
  margin-bottom: 15px;
}

::placeholder {
  color: #cbead1;
}

.button {
  padding: 10px;
  background: #73c088;
  color: white;
  border: none;
  border-radius: 8px;
}

p {
  color: #a8a8a8;
  margin-top: 20px;
}

a {
  color: #73c088;
  border-bottom: 1px solid #73c088;
  text-decoration: none;
}

h2 {
  font-size: 17px;
  letter-spacing: 10px;
  color: #329d9c;
  padding-top: 50px;
  font-family: "Poppins", sans-serif;
}
</style>

<script>
import SignUpModal from "./SignUpModal.vue";

export default {
    components: {
        SignUpModal
    },

  data() {
    return {
      email: "",
      password: "",
      showModal: false,
      url:"../views/Home.vue",
    };
  },
  methods: {
    async login() {
      const response = await fetch("http://localhost:4500/users/");
      const fetchedData = await response.json();
      // this.usersData = fetchedData;

      if(response.status==200)
      {
        console.log("LOGIN!");
        localStorage.setItem("user-info",JSON.stringify(fetchedData[0]))
        this.$router.push({ name:'Home' })

        console.log(fetchedData);
      }
    }
  },
};
</script>

<script setup>
</script>