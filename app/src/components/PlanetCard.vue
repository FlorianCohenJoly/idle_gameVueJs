<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-8 m-4"
  >
    <img
      :src="planet.imageUrl || ''"
      alt="Image"
      class="w-full h-auto object-center object-cover rounded-lg mb-4"
    />
    <div class="text-center">
      <h2 class="text-lg font-semibold leading-6 text-blue-300">{{ planet?.name }}</h2>
      <p v-show="!planet.isBought" class="text-base font-semibold leading-5 text-white">
        Prix en pessinos : {{ planet?.price }} $
      </p>
      <p class="text-base font-semibold leading-5 text-white">Niveau : {{ planet?.level }}</p>
      <p class="text-base font-semibold leading-5 text-white">Gain : +{{ planet?.gain }} $</p>
      <p class="text-base font-semibold leading-5 text-white">
        Coût : {{ planet?.level_ressource }} $
      </p>
      <button
        v-show="!planet.isBought"
        class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        @click="onClickPlanet"
      >
        Acheter
      </button>
      <button
        v-show="planet.isBought"
        class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        @click="onClickUpgrade(planet?._id || planet?.id)"
      >
        Ameliorer
      </button>
    </div>

    <vue-final-modal
      v-model="showModal"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-blue-950 p-4 rounded-lg shadow-lg text-center">
        <p class="text-blue-300 font-semibold">Confirmation</p>
        <p class="text-white font-semibold">
          Êtes-vous sûr de vouloir acheter l'usine {{ planet?.name }} ?
        </p>
        <div class="mt-4">
          <button
            class="bg-blue-400 text-white px-4 py-2 rounded-md mr-2"
            @click="confirmAction(planet?._id, userId)"
          >
            Oui
          </button>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-md" @click="cancelAction">
            Non
          </button>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
import { ref } from 'vue'
import { usePlanetStore } from '@/stores/planets'

const planetStore = usePlanetStore()

let showModal = ref(false)
defineProps({
  button: Function,
  planet: Object
})
let user = JSON.parse(localStorage.getItem('user') || '')
let userId = user.user_id || user._id

const confirmAction = (planetId: string, userId: string) => {
  if (planetId) {
    planetStore.buyOnePlanet(planetId, userId)
    showModal.value = false
  }
  showModal.value = false
}

const cancelAction = (e: Event) => {
  e.preventDefault()
  showModal.value = false
}

const onClickPlanet = () => {
  showModal.value = true
}

const onClickUpgrade = (planetId: string) => {
  console.log(planetId, userId)
  if (planetId && userId) {
    planetStore.upgradeOnePlanet(planetId, userId)
  }
}
</script>

<style lang="scss" scoped></style>
