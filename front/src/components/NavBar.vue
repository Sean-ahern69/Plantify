

<template>

    <div class="flex_container" >

        <router-link to="/Home" class="flex_child"><img :src="homeicon" class="icon_class" ><span class="icon_label">Home</span></router-link>

        <router-link to="/Listings" class="flex_child"><img :src="listingicon" class="icon_class" > <span class="icon_label">Listings</span></router-link>

<!-- the watchlist below needs to be a modal popup not a router -->
        <router-link to="/Watchlist" class="flex_child"><img :src="watchlisticon" class="icon_class" > <span class="icon_label">Watchlist</span> </router-link>

        <router-link to="/Account" class="flex_child"><img :src="accounticon" class="icon_class" ><span class="icon_label">Account</span></router-link>

    </div>

</template>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
    margin:0;
}


.flex_container{
    display:flex;
    justify-content: space-around;
    background-color: #73C088;
    height: 90px;
    width: 100%;
    bottom: 0;
    align-items: center;
    position: fixed;         /* may need to come out once integrated with app*/
    z-index: 50;
}

.flex_child{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
}

.icon_class{
  height:38px;
}

.icon_label{
  font-family: 'Poppins', sans-serif;
  font-size: 600;
  color: white;
  padding: 5px 0px 0px 0px;
}

</style>

<script>

/* sourcing the icon logos locally*/

export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      homeicon: './src/assets/home.png',
      listingicon: './src/assets/listings.png',
      watchlisticon: './src/assets/watchlist.png',
      accounticon: './src/assets/account.png'
    }
  }
}
</script>

<script setup>

</script>