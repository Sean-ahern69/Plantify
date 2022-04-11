<template>

    <div>
    <img :src="addlistingicon" class="add_filter_button" >
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
  name: 'AddListingButton',
  data: function() {
    return {
      addlistingicon: './src/assets/plus.png'
    }
  }
}
</script>

<script setup>

</script>