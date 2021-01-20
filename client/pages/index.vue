<template>
  <div class="container mx-auto min-h-screen index">
    <h1 class="text-3xl text-center mt-2 text-white">
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
