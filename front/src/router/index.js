import { createRouter, createWebHistory } from 'vue-router'
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Listings from '../views/Listings.vue'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/listings',
        name: 'Listings', 
        component: Listings
    },
    {
        path: '/Account',
        name: 'Account', 
        component: Account
    },
    {
        path: '/Login',
        name: 'Login', 
        component: Login
    },
    {
        path: '/',
        name: 'Home', 
        component: Listings
    }
]
// code below is NOT to be edited
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router