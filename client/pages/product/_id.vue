<template>
  <div class="product h-screen grid grid-cols-2 grid-rows-2">
    <img src="https://via.placeholder.com/500x400" alt="Image" class="row-span-2 m-auto">
    <div class="m-auto">
      <h1 class="text-center text-4xl my-2">
        Quantity
      </h1>
      <p class="text-xl my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis dolor ipsum cumque sint aliquam aperiam doloremque illo, harum unde!
      </p>
      <p class="text-lg my-2">
        Quantity: 10
      </p>
    </div>
    <div class="mx-auto">
      <button class="p-3 bg-blue-600 text-lg text-white mr-2">
        Edit Product
      </button>
      <button class="p-3 bg-red-600 text-lg text-white ml-2">
        Delete Product
      </button>
    </div>
  </div>
</template>

<script>
export default {

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
