<template>
  <div class="edit-product h-screen grid grid-cols-2">
    <form class="z-10 w-3/4 my-auto ml-10 border-2 bg-gray-900 grid grid-cols-2 text-white shadow-xl rounded-xl p-4">
      <h1 class="text-4xl col-span-2 text-center">
        Edit product
      </h1>
      <div class="flex flex-col p-2">
        <label class="text-lg">Product name:</label>
        <input v-model="product.name" class="bg-gray-900 p-2 border-0 border-b-2 outline-none focus:border-yellow-700" type="text">
      </div>
      <div class="flex flex-col p-2">
        <label class="text-lg">Product quantity</label>
        <input v-model="product.quantity" class="bg-gray-900 p-2 border-0 border-b-2 outline-none focus:border-yellow-700" type="number">
      </div>
      <div class="col-span-2 flex flex-col p-2">
        <label class="text-lg">Product description</label>
        <textarea v-model="product.description" class="bg-gray-900 p-2 border-0 border-b-2 outline-none h-40 resize-none focus:border-yellow-700" />
      </div>
      <div class="col-span-2 flex flex-col p-2">
        <label class="text-lg">Product image URL</label>
        <input v-model="product.image_url" class="bg-gray-900 p-2 border-0 border-b-2 outline-none focus:border-yellow-700" type="url">
      </div>
      <div class="col-span-2 m-auto p-4">
        <button class="bg-yellow-700 p-2 text-xl rounded-2xl hover:bg-yellow-600" type="submit">
          Add product
        </button>
      </div>
    </form>
    <div class="w-full h-screen bg-gray-800 transform z-0" />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.$store.dispatch('getSingleProduct', this.$route.params.id)
  }
}
</script>

<style>
.edit-product::after {
  content: '';
  position: absolute;
  top: 80px;
  left: 5%;
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  transform: skewX(-12deg);
}
</style>
