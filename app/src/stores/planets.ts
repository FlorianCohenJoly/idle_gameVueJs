import {defineStore} from 'pinia'
import {useToast} from "vue-toastification";

import axios from "axios";

const toast = useToast();

export const useAuthStore = defineStore('planets', {

    state: () => ({
        userPlanet: [],
        allPlanets: []
    }),


    actions: {},
})