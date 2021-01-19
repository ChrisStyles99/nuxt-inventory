<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <form
      class="bg-gray-900 flex flex-col shadow-xl p-4 rounded-xl w-2/5 text-white"
      @submit.prevent="login"
    >
      <h1 class="text-3xl text-center my-2">
        Login
      </h1>
      <label for="email" class="text-xl my-2">Email: </label>
      <input
        id="email"
        v-model="email"
        class="bg-gray-900 p-2 my-2 border-0 border-b-2 outline-none focus:border-yellow-700"
        type="email"
      >
      <label for="password" class="text-xl my-2">Password: </label>
      <input
        id="password"
        v-model="password"
        class="bg-gray-900 p-2 my-2 border-0 border-b-2 outline-none focus:border-yellow-700"
        type="password"
      >
      <button class="p-2 my-2 bg-yellow-700 rounded-2xl hover:bg-yellow-600" type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style></style>
