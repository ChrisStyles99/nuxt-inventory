<template>
  <div class="card rounded shadow-2xl mx-auto p-2 border-2 border-gray-600 bg-white">
    <div class="card-img w-full">
      <img class="object-cover" :src="product.image_url" alt="Image">
    </div>
    <div class="card-content">
      <h1 class="text-xl">
        {{ product.name }}
      </h1>
      <nuxt-link :to="`/product/${product.id}`" class="float-right p-2 bg-gray-800 text-white">
        See more
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: 'No name',
          image_url: 'https://via.placeholder.com/250'
        }
      }
    }
  }
}
</script>

<style>

</style>
