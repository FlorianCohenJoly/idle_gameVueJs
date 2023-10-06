<script lang="ts" setup>
import GamePage from '@/components/GamePage.vue'
</script>

<template>
  <main class="relative h-screen">
    <video autoplay class="absolute inset-0 w-full h-full object-cover object-center z-0" loop muted>
      <source src="@/assets/videos/planet_-_73425%20(720p).mp4" type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-black opacity-30 z-1"></div>

    <GamePage/>
  </main>
</template>
