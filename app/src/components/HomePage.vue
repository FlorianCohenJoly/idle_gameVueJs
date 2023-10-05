<template>
  <div class="absolute inset-0 flex items-center justify-center flex-col">
    <h1 class="text-5xl text-blue-100 font-bold">Welcome to Idle Space Tycoon</h1>
    <button
        type="button"
        class="rounded bg-primary m-5 px-6 pb-2 pt-2.5 text-xs
        font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]
        transition duration-150 ease-in-out hover:bg-primary-600
        hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
        focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700
        active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
        dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
        dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
        dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
        dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

      <RouterLink :to="{ name:'login'}">Start the game</RouterLink>

    </button>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>

</style>