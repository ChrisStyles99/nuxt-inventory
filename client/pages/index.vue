<template>
  <div class="container mx-auto">
    <h1 class="text-3xl text-center mt-2">
      Inventory items
    </h1>
    <div class="grid grid-cols-4 gap-1 mt-2">
      <ItemCard />
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  components: {
    ItemCard
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
