<template>
  <main class="wrapper">
    <h1>Products</h1>
    <div class="card-container">
       <ProductCart v-for="(product) in inventory.slice(0,12)"
            :key="product.id"
            :product ="product"
            :addToCart="addToCart"
            />
    </div>
  </main>
</template>

<script>
import ProductCart from '@/components/ProductCart'
export default {
  name: 'Home',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCart
  }
}
</script>
