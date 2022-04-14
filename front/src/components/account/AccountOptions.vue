<template>
  <div class="container">
    <router-link to="/Listings" class="list">
        <img :src="list1">
      <p>MY LISTINGS</p>
    </router-link>
    <div class="list">
        <img :src="list2">
      <p>WATCH LIST</p>
    </div>
    <div class="list">
        <img :src="list3" id="doller">
      <p>SOLD ITEMS</p>
    </div>
    <div class="list">
        <img :src="list4">
      <p>PURCHASED ITEMS</p>
    </div>
  </div>
</template>

<style scoped>
.list{
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid #cbead1;
    width: 100%;
    margin: 0 30px;
    padding: 15px 0;
    text-decoration: none;
    color: black;
}

.list img{
    margin-right: 20px;
}

#doller{
    padding: 0 5px;
}
.container{
  padding-bottom: 90px;
}
</style>

<script>
export default {
  data() {
    return {
        list1: './src/assets/accountList1.png',
        list2: './src/assets/accountList2.png',
        list3: './src/assets/accountList3.png',
        list4: './src/assets/accountList4.png'
    }
  }
};
</script>

<script setup>
</script>