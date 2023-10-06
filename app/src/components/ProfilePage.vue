<script lang="ts" setup>
import { onBeforeMount, onMounted } from 'vue'
import router from '@/router'

import { useAuthStore } from '@/stores/auth'
import { useResourceStore } from '@/stores/ressources'
import HeaderBar from '@/components/HeaderBar.vue'
import { usePlanetStore } from '@/stores/planets'

const authStore = useAuthStore()
const resourceStore = useResourceStore()
const planetStore = usePlanetStore()

onBeforeMount(async () => {
  if (localStorage.getItem('user')) {
    authStore.userData = JSON.parse(localStorage.getItem('user') || '')
  } else {
    await router.push({ name: 'login' })
  }
})

onMounted(async () => {
  await resourceStore.getUserResources(authStore.userData.user_id || authStore.userData._id)
  await planetStore.getAllPlanets()
})
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center flex-col">
    <h1 class="text-5xl text-black-100 font-bold">Profil du joueur</h1>
    <HeaderBar v-bind:money="authStore.userData.pessinos" />
    <h2 class="text-5xl text-blue-100 self-center font-bold">
      Hello my friend {{ authStore.userData.username }} !
    </h2>

    <!-- Placez vos éléments ici -->

    <div class="flex flex-wrap justify-start">
      <div v-for="item in resourceStore.userResources" :key="item.id">
        <a
          class="block max-w-sm w-[300px] h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          href="#"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ item?.name }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ item?.quantity }}</p>
        </a>
      </div>
    </div>

    <a
      class="block max-w-sm w-[300px] h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      href="#"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Données</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Données</p>
    </a>
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>

<script lang="ts"></script>

<style scoped></style>
