import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

import axios from 'axios'

const toast = useToast()

export const useResourceStore = defineStore('resources', {
  state: () => ({
    userResources: [],
    allResources: []
  }),

  actions: {
    async getAllResources() {
      const response = await axios.get('http://localhost:3001/inventory')
      this.allResources = response.data
    },

    async getUserResources() {
      const response = await axios.get('http://localhost:3001/resources')
      this.userResources = response.data
    },
  }
})