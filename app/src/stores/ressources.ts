import { defineStore } from 'pinia'

import axios from 'axios'

export const useResourceStore = defineStore('resources', {
  state: () => ({
    userResources: []
  }),

  actions: {
    async getUserResources(userId: string) {
      const response = await axios.get(`http://localhost:3001/${userId}/resources`, {})
      this.userResources = response.data.ressources
      console.log('r', response.data.ressources)
    }

    // async getUserPlanets() {
    //   const response = await axios.get('http://localhost:3001/planets')
    //   this.userPlanet = response.data
    // }
  }
})
