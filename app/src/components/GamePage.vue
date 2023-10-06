<template>
  <div class="absolute inset-0 flex  flex-col z-2">
    <HeaderBar v-bind:money="authStore.userData.pessinos"/>
    <h2 class="text-5xl text-blue-100  self-center font-bold">Hello my friend,
      {{ authStore.userData.username }} !</h2>

    <div class="flex flex-wrap justify-start">
      <div v-for="planet in planetStore.allPlanets" :key="planet.id">
        <PlanetCard :planet="planet"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";
import router from "@/router";

import HeaderBar from "@/components/HeaderBar.vue";
import PlanetCard from "@/components/PlanetCard.vue";

import {useAuthStore} from "@/stores/auth";
import {usePlanetStore} from "@/stores/planets";

const authStore = useAuthStore()
const planetStore = usePlanetStore()

onBeforeMount(async () => {
  if (localStorage.getItem('user')) {
    authStore.userData = JSON.parse(localStorage.getItem('user') || '')
  } else {
    await router.push({name: 'login'})
  }
})

onMounted(async () => {
  await planetStore.getAllPlanets()
})

</script>

<style scoped>

</style>