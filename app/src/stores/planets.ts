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

    async gainMoneyFromPlanet(userId: string){
      if (userId !== undefined) {
          await axios.put(`http://localhost:3001/planet/gain`, {
          userId: userId
        })
    }
  }
})
