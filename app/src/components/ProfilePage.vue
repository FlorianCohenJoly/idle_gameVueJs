<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";
import router from "@/router";

import {useAuthStore} from "@/stores/auth";
import { useResourceStore } from "@/stores/resources";

const authStore = useAuthStore()
const resourceStore = useResourceStore()

onBeforeMount(async () => {
  if (localStorage.getItem('user')) {
    authStore.userData = JSON.parse(localStorage.getItem('user') || '')
  } else {
    await router.push({name: 'login'})
  }
})

onMounted (async () => {
  await resourceStore.getAllResources()
})

</script>

<template>
  <div class="flex flex-wrap justify-start">
    <a
      v-for="resource in resourceStore.allResources"
      :key="resource.id"
      href="#"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ resource.name }}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ resource.quantity }}</p>
    </a>
  </div>
</template>

<style scoped>
/* Vos styles CSS ici */
</style>
