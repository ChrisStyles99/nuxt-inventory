<template>
  <div class="product h-screen grid grid-cols-2 grid-rows-2">
    <img :src="product.image_url" alt="Image" class="row-span-2 m-auto w-2/4 object-cover">
    <div class="m-auto">
      <h1 class="text-center text-4xl my-2">
        {{ product.name }}
      </h1>
      <p class="text-xl my-2">
        {{ product.description }}
      </p>
      <p class="text-lg my-2">
        Quantity: {{ product.quantity }}
      </p>
    </div>
    <div class="mx-auto">
      <nuxt-link :to="`/product/edit/${product.id}`" class="p-3 bg-blue-600 text-lg text-white mr-2">
        Edit Product
      </nuxt-link>
      <button class="p-3 bg-red-600 text-lg text-white ml-2" @click="activeModal = true">
        Delete Product
      </button>
      <DeleteModal v-if="activeModal" @hide-modal="activeModal = false" />
    </div>
  </div>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue'
export default {
  components: {
    DeleteModal
  },
  middleware: 'auth',
  data () {
    return {
      activeModal: false
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.$store.dispatch('getSingleProduct', this.$route.params.id)
    console.log(this.$store.state.product)
  }
  // methods: {
  //   hideModal () {
  //     this.activeModal = false
  //   }
  // }
}
</script>

<style>
  .product::after {
    content: '';
    background-color: #242935;
    position: absolute;
    left: -120px;
    top: 80px;
    height: 100%;
    width: 50%;
    z-index: -1;
    transform: skewX(12deg);
  }
</style>
