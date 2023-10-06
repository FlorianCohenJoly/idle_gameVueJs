<template>
  <div class="absolute inset-0 flex  flex-col z-2">
    <h2 class="text-5xl text-blue-100  self-center font-bold">Hello my friend,
      {{ authStore.userData.username }} !</h2>
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
  const userId = router.currentRoute.value.params.userId;
  await marketplaceStore.getAllItems(userId);
})

</script>

<style scoped>

</style>