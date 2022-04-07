<template>
   
    <div>
    <img :src="filtericon" class="add_filter_button" >
    </div>

</template>

<style>
.add_filter_button{
    width: 85px;
    bottom: 120px;
    position: fixed;
    right: 35px;
    z-index: 1;
}
</style>

<script>
export default {
  name: 'FilterButton',
  data: function() {
    return {
      filtericon: './src/assets/filter.png'
    }
  }
}
</script>

<script setup>

</script>