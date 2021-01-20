<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#111827" fill-opacity="1" d="M0,256L80,224C160,192,320,128,480,112C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
    </svg>
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

<style scoped>
  svg {
    position: absolute;
    top: 80px;
  }
</style>
