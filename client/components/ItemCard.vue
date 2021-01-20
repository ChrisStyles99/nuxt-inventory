<template>
  <div class="card rounded shadow-2xl mx-auto p-2 border-2 border-gray-600 bg-white">
    <div class="card-img w-full">
      <img class="object-cover" src="https://via.placeholder.com/250" alt="Image">
    </div>
    <div class="card-content">
      <h1 class="text-xl">
        Item name
      </h1>
      <nuxt-link to="/product/1" class="float-right p-2 bg-gray-800 text-white">
        See more
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
