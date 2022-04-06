<template>
  <div class="container">
    <div class="Login_container">
      <h1>LOG IN</h1>
      <div class="input_container">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="passworld" v-model="password" placeholder="Password" />
        
        <router-link to="/Home" class="button">LOG IN</router-link>

        <p>Don't have account? <a @click="showModal = true">SIGN UP</a></p>
      </div>
    </div>

    <div v-if="showModal" id="modal_container">
        <SignUpModal />
        <p id="closeModal">Already have account? <a @click="showModal = false">LOG IN</a></p>
    </div>
    
      <!-- <button @click="showModal = false">Close</button> -->
    

    <h2>PLANTIFY</h2>
  </div>
</template>

<style scoped>

#modal_container {
    position: fixed;
    top:0;
    left:0;
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
  height: 250px;
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

p {
  color: #a8a8a8;
  margin-top: 10px;
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
  position: absolute;
  bottom: 130px;
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
      url:"../views/Home.vue"
    };
  },
  methods: {
    async login() {
      let result = await fetch(
        `http://localhost:4500/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
    },
  },
};
</script>

<script setup>
</script>