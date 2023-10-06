<template>
  <div id="app" class="font-sans antialiased">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img alt="logo" class="w-12 h-12 mr-2" src="@/assets/images/logo.png" />
        <router-link to="/">
          <span class="font-semibold text-xl tracking-tight">Idle Space Tycoon</span>
        </router-link>
      </div>

      <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div>
          <p
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-blue-300 mt-4 sm:mt-0"
            @click="goToProfil"
          >
            Vos Pessinos : {{ money }} $
          </p>
        </div>
        <div class="m-5">
          <button
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-teal hover:bg-blue-300 mt-4 sm:mt-0"
            @click="disconnect"
          >
            Deconnecter
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

defineProps({
  money: Number
})

const disconnect = async () => {
  localStorage.clear()
  await router.push({ path: '/login' })
}

const goToProfil = async () => {
  await router.push({ path: 'profile' })
}
</script>

<style lang="scss" scoped></style>
