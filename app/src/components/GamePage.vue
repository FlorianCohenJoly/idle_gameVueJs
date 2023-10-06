<template>
  <div class="absolute inset-0 flex flex-col z-2">
    <HeaderBar v-bind:money="authStore.userData?.pessinos" />
    <h2 class="text-5xl text-blue-100 self-center font-bold">
      Hello my friend, {{ authStore.userData?.username }} !
    </h2>

    <div class="flex flex-wrap justify-start">
      <div v-for="planet in planetStore.allPlanets" :key="planet.id">
        <PlanetCard :planet="planet" />
      </div>
      <button
        @click="
          onClickGoMarket(
            authStore.userData.id || authStore.userData._id || authStore.userData.user_id
          )
        "
        type="button"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 max-w-fit self-center"
      >
        Aller au marketplace
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import router from '@/router'

import HeaderBar from '@/components/HeaderBar.vue'
import PlanetCard from '@/components/PlanetCard.vue'

import { useAuthStore } from '@/stores/auth'
import { usePlanetStore } from '@/stores/planets'

const authStore = useAuthStore()
const planetStore = usePlanetStore()

onBeforeMount(async () => {
  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user') || '')
    console.log('local', user)
    await authStore.getMe(user.user_id || user._id)
  } else {
    await router.push({ path: '/login' })
  }
})

onMounted(async () => {
  await planetStore.getAllPlanets()

  const onClickGoMarket = async () => {
    await router.push({ path: `/marketplace/items` })
  }

  setInterval(async () => {
    await authStore.gainMoneyFromPlanet(authStore.userData?.user_id || authStore.userData?._id)
  }, 2000)
})
</script>

<style scoped></style>
