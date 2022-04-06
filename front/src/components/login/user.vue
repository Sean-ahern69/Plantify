<template>
  <div class="wrap">
    <p>This area is for checking API "will not show up in app"</p>
    <div class="user">
      <h1>{{ userProp.name }}</h1>
      <button @click="delEmit">Delete</button>
      <button @click="updateEmit">Update</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    delEmit() {
      this.$emit("delUserEmit", this.userProp._id);
    },
    updateEmit() {
      this.$emit("updUserEmit", this.userProp._id);
    },
  },
  emits: ["delUserEmit", "updUserEmit"],
};
</script>



<script setup>
defineProps({
  userProp: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.wrap {
  background: #dadada;
  padding: 10px;
}
.user {
  margin: 10px;
  background-color: pink;
  display: flex;
  padding: 10px;
}
button {
  background-color: red;
  margin-left: 20px;
  color: white;
  font-weight: bold;
}
</style>