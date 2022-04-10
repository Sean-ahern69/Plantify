<template>
      <div class="input_container">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="price" placeholder="Price" />
        <input type="text" v-model="description" placeholder="Description" />
        <input type="text" v-model="photo" placeholder="Photo URL" />
        <input type="text" v-model="location" placeholder="Loaction" />

      </div>
</template>

<style scoped>
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
</style>




<script>

</script>

<script setup>

</script>