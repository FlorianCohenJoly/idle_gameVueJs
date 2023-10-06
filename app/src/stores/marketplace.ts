import {defineStore} from 'pinia'
import axios from "axios";

export const useMarketplaceStore = defineStore('items', {

    state: () => ({
        userItems: [],
        allItems: []
    }),

    actions: {
        async getAllItems(userId: string) {
            const response = await axios.get(`http://localhost:3001/${userId}/marketplace/items`);
            console.log(response.data.items);
            this.allItems = response.data.items;
        },
    },
})