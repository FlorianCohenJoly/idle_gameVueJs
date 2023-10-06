<template>
  <div class="absolute inset-0 flex  flex-col z-2">
    <h2 class="text-5xl text-blue-100  self-center font-bold">Hello my friend,
      {{ authStore.userData.username }} !</h2>
    <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 max-w-fit self-center">Ajouter un item</button>
    <div class="flex flex-wrap justify-start">
      <div v-for="item in marketplaceStore.allItems" :key="item.id">
        <MarketplaceCard :item="item"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";
import router from "@/router";

import MarketplaceCard from "@/components/MarketplaceCard.vue";

import {useAuthStore} from "@/stores/auth";
import { useMarketplaceStore } from "@/stores/marketplace";

const authStore = useAuthStore()
const marketplaceStore = useMarketplaceStore()

onBeforeMount(async () => {
  if (localStorage.getItem('user')) {
    authStore.userData = JSON.parse(localStorage.getItem('user') || '')
  } else {
    await router.push({name: 'login'})
  }
})

onMounted(async () => {
  await marketplaceStore.getAllItems(authStore.userData.user_id || authStore.userData._id);
})

</script>

<style scoped>

</style>