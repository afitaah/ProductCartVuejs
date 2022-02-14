<template>
  <aside class='cart-container'>
    <div class='cart'>
      <h1 class='cart-title spread'>
        <span>
          Cart
          <i class='icofont-cart-alt icofont-1x'></i>
        </span>
        <button @click='togglebtn' class='cart-close'>&times;</button>
      </h1>
      <div class='cart-body'>
        <table class='cart-table'>
          <thead>
            <tr>
              <th><span class='sr-only'>Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class='sr-only'>Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='(quantity, key, i) in cart' :key='i'>
              <td><i class='icofont-carrot icofont-3x'></i></td>
              <td>{{ key }}</td>
              <td>${{ getPrice(key).toFixed(2) }}</td>
              <td class='center' v-if='isNaN(quantity)'>{{ 0 }}</td>
              <td class='center' v-else>{{ quantity }}</td>
              <td v-if='isNaN(quantity)'>
                ${{ (getPrice(key) * 0).toFixed(2) }}
              </td>
              <td v-else>${{ (getPrice(key) * quantity).toFixed(2) }}</td>
              <td class='center'>
                <button @click='remove(key)' class='btn btn-light cart-remove'>
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class='center' v-if='!Object.keys(cart).length'>
          <em>No items in cart</em>
        </p>
        <div class='spread'>
          <span><strong>Total:</strong>{{ CalculatecartTotal }}</span>
          <button class='btn btn-light'>Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['togglebtn', 'cart', 'inventory', 'remove'],
  computed: {
    CalculatecartTotal () {
      const Total = Object.entries(this.cart).reduce((total, perPrice) => {
        if (isNaN(perPrice[1])) perPrice[1] = 0
        return total + perPrice[1] * this.getPrice(perPrice[0])
      }, 0)
      return Total.toFixed(2)
    }
  },
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      // if(isNaN(product)) product.price.USD= 0
      return product.price.USD
    }
  }
}
</script>
