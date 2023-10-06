import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

import axios from 'axios'

const toast = useToast()

export const usePlanetStore = defineStore('planets', {
  state: () => ({
    userPlanet: [],
    allPlanets: []
  }),

  actions: {
    async getAllPlanets() {
      const response = await axios.get('http://localhost:3001/planets')
      this.allPlanets = response.data
    },

    async buyOnePlanet(id: string, userId: string) {
      if (id !== undefined) {
        const response = await axios.put(`http://localhost:3001/buy-planet/${id}`, {
          userId: userId
        })
        if (response.data.success === true) {
          toast.success(response.data.message, {
            timeout: 2000
          })
        } else {
          toast.error(response.data.message, {
            timeout: 2000
          })
        }
      }
    },

    async upgradeOnePlanet(planetId: string, userId: string) {
      if (!planetId || !userId) {
        toast.error('Non existant', {
          timeout: 2000
        })
        return
      }
      const result = await axios.put(`http://localhost:3001/planet/${planetId}/upgrade`, {
        userId: userId
      })
      if (result.data.data.success === false) {
        if (result.data.data.error === 400) {
          toast.error('Fond insuffisant', {
            timeout: 2000
          })
        }
      }

      const response = await axios.get('http://localhost:3001/planets')
      this.allPlanets = response.data
    }
  }
})
