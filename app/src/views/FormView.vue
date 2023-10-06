<template>
  <form>
    <div class="mb-6">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-fit">
        <option selected>Choose a country</option>
        <option value="US">stone</option>
        <option value="CA">gold</option>
        <option value="FR">passi</option>
        <option value="DE">adrien</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="price" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-fit self-center" placeholder="Prix de l'item" required>
    </div>
    <div class="mb-6">
      <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-fit self-center" placeholder="Quantité" required>
    </div>
    <div class="flex items-start mb-6">
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center">Submit</button>
  </form>
</template>

<script setup lang="ts">
</script>