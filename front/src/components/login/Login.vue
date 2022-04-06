<template>
    <h1>login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="passworld" v-model="password" placeholder="Password">
    <button @click="login">Log In</button>
</template>

<style scoped>

</style>

<script>
export default{
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods :{
        async login(){
            let result = await fetch(`http://localhost:4500/users?email=${this.email}&password=${this.password}`)
            console.log(result)
        }
    }
}
</script>

<script setup>

</script>