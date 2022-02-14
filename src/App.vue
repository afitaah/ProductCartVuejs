<template>
<header class="top-bar spread">
        <nav class="top-bar-nav">
          <router-link to='/' class="top-bar-link">
            <i class="icofont-spoon-and-fork"></i>
            <span>Home</span>
          </router-link>
          <router-link  to='/Products' class="top-bar-link">
            <span>Products</span>
          </router-link>
          <router-link  to="/Pastorders" class="top-bar-link">
            <span> Past Orders</span>
          </router-link>
        </nav>
        <div @click="toggleSidebar" class="top-bar-cart-link" >
          <i class="icofont-cart-alt icofont-1x"></i>
          <span >Cart ({{ totalQuantity }})</span>
        </div>
      </header>
      <router-view :inventory="inventory" :addToCart="addToCart" />

       <Sidebar
        v-if="ShowSidebar"
        :togglebtn="toggleSidebar"
        :cart="cart"
        :inventory="inventory"
        :remove="removeItem"
       />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import food from './food.json'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      ShowSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantatiy) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantatiy
      // this.inventory[index].quantity = 0
      // console.log(this.cart);
    },
    toggleSidebar () {
      console.log('clicked')
      this.ShowSidebar = !this.ShowSidebar
    },
    removeItem (name) {
      // console.log(this.cart[name])
      // console.log("key :", Object.keys(this.cart)[0])
      delete this.cart[name]
    }
  }
}
</script>

<style scoped>
h1{
  color: purple;
}
</style>
