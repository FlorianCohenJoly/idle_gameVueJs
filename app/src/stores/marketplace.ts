import {defineStore} from 'pinia'
import {useToast} from "vue-toastification";

import axios from "axios";

const toast = useToast();

export const useMarketStore = defineStore('items', {

    state: () => ({
        userItems: [],
        allItems: []
    }),


    actions: {},
})