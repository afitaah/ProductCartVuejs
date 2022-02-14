<template>
  <div class="home">
        <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">
        <h2> Recommended </h2>
        <div class="recommended">
           <ProductCart v-for="(product) in inventory.slice(0,3)"
            :key="product.id"
            :product ="product"
            :addToCart="addToCart"
            />
        </div>
      </main>
  </div>
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
