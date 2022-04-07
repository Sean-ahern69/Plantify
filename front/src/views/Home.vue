<template>

<PlantContainer/>


</template>

<style scoped>

</style>

<script>

</script>

<script setup>
import PlantContainer from '../components/home/PlantContainer.vue';

export default {
  data () {
     return {
       itemList: [{
        "id": 1,
        "isHidden": false
      },
    ],

     }
  }
}

</script>