<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Déclarez une référence avec une annotation de type pour stocker les données des ressources
const resources = ref<{ name: string; quantity: number }[]>([]);

// Effectuez une requête HTTP pour récupérer les données des ressources depuis votre API
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/inventory');
    if (response.ok) {
      const data = await response.json();
      resources.value = data; // Mettez à jour la référence des ressources avec les données de l'API
    } else {
      console.error('Échec de la requête vers l\'API');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
});
</script>

<template>
  <!-- ... votre contenu précédent ... -->
  <div class="mt-4 flex flex-wrap justify-center">
    <div v-for="resource in resources" :key="resource.name" class="mt-4">
      <a href="#" class="block max-w-sm w-[300px] h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ resource.name }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ resource.quantity }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Vos styles CSS ici */
</style>
