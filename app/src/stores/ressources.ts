import { defineStore } from 'pinia'

import axios from 'axios'

export const useResourceStore = defineStore('resources', {
    state: () => ({
        userResources: [],
        userPlanet: []
    }),

    actions: {

        async getUserResources() {
            const response = await axios.get('http://localhost:3001/resources')
            this.userResources = response.data
            console.log(response.data)
        },

        async getUserPlanets() {
            const response = await axios.get('http://localhost:3001/planets')
            this.userPlanet = response.data
        }
    }
})