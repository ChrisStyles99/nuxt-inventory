<template>
  <nav class="bg-gray-900 h-20 flex items-center justify-between text-white shadow-xl">
    <h1 class="ml-2 text-3xl">
      <nuxt-link to="/">
        Inventory
      </nuxt-link>
    </h1>
    <ul class="flex flex-row">
      <client-only>
        <li class="nav-link">
          <nuxt-link v-if="!isLoggedIn" class="nav-anchor" to="/login">
            Login
          </nuxt-link>
        </li>
        <li class="nav-link">
          <nuxt-link v-if="isLoggedIn" class="nav-anchor" to="/product/add">
            Add product
          </nuxt-link>
        </li>
      </client-only>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn () {
      let loggedIn = false
      if (process.client) {
        loggedIn = window.document.cookie.includes('isLoggedIn=true')
      }
      return loggedIn
    }
  }
}
</script>

<style scoped>
  .nav-link {
    @apply mx-2;
  }

  .nav-anchor {
    @apply transition p-2 text-xl rounded;
  }

  .nav-anchor:hover {
    @apply bg-gray-500;
  }
</style>
