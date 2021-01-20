<template>
  <div class="modal fixed inset-0 w-full h-full bg-black bg-opacity-25" @click="$emit('hide-modal')">
    <div class="modal-inner bg-white p-4 z-50 rounded-2xl">
      <h1 class="text-3xl text-center">
        Are you sure to delete?
      </h1>
      <div class="flex justify-around">
        <button class="p-3 bg-red-600 text-lg text-white ml-2 rounded">
          Delete
        </button>
        <button class="p-3 bg-blue-600 text-lg text-white mr-2 rounded" @click="$emit('hide-modal')">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
