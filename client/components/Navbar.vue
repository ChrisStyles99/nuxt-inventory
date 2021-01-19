<template>
  <nav class="bg-gray-900 h-20 flex items-center justify-between text-white shadow-xl">
    <h1 class="ml-2 text-3xl">
      <nuxt-link to="/">
        Inventory
      </nuxt-link>
    </h1>
    <ul class="flex flex-row">
      <li class="nav-link">
        <nuxt-link class="nav-anchor" to="/login">
          Login
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
  .nav-link {
    @apply mx-2;
  }

  .nav-anchor {
    @apply transition p-2 text-xl rounded;
  }

  .nav-anchor:hover {
    @apply bg-green-800;
  }
</style>
