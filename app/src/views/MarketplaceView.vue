<script setup lang="ts">
import MarketplacePage from "@/components/MarketplacePage.vue";
</script>

<template>
  <main class="relative h-screen">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover object-center">
      <source src="@/assets/videos/planet_-_73425%20(720p).mp4" type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-black opacity-30"></div>
    <MarketplacePage />
  </main>
</template>
