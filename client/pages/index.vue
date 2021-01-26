<template>
  <div class="container mx-auto min-h-screen index">
    <h1 class="text-3xl text-center mt-2 text-white">
      Inventory items
    </h1>
    <client-only>
      <p class="text-center text-3xl text-red-500">
        {{ productsError }}
      </p>
      <p class="text-center text-3xl text-red-500">
        {{ addProductError }}
      </p>
      <p class="text-center text-3xl text-green-500">
        {{ addProductMsg }}
      </p>
      <p class="text-center text-3xl text-red-500">
        {{ deleteProductError }}
      </p>
      <p class="text-center text-3xl text-green-500">
        {{ deleteProductMsg }}
      </p>
      <div class="grid grid-cols-4 gap-1 mt-2">
        <ItemCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </client-only>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  components: {
    ItemCard
  },
  middleware: 'auth',
  computed: {
    products () {
      return this.$store.state.products
    },
    productsError () {
      return this.$store.state.productsError
    },
    addProductError () {
      return this.$store.state.addProductError
    },
    addProductMsg () {
      return this.$store.state.addProductMsg
    },
    deleteProductError () {
      return this.$store.state.deleteProductError
    },
    deleteProductMsg () {
      return this.$store.state.deleteProductMsg
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
.index::after {
  content: '';
  position: absolute;
  top: -150px;
  left: 0;
  background-color: #242935;
  width: 100%;
  height: 75%;
  z-index: -1;
  transform: skewY(-12deg);
}
</style>
