<template>
  <div
      class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-8 m-4"
  >
    <div class="text-center">
      <h2 class="text-lg font-semibold leading-6 text-blue-300">{{ item?.resource?.name }}</h2>
      <p class="text-base font-semibold leading-5 text-white">
        Prix en pessinos : {{ item?.price }} $
      </p>
      <p class="text-base font-semibold leading-5 text-white">
        Quantité : {{ item.quantity }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  button: Function,
  item: Object
})
</script>

<style lang="scss" scoped></style>