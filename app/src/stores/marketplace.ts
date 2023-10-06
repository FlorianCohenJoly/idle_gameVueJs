import {defineStore} from 'pinia'
import {useToast} from "vue-toastification";

import axios from "axios";

const toast = useToast();

export const useMarketplaceStore = defineStore('items', {

    state: () => ({
        userItems: [],
        allItems: []
    }),


    actions: {
        async getAllItems() {
            const response = await axios.get('http://localhost:3001/marketplace/items')
            this.allItems = response.data
        },
    },
})