import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ConnexionView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
<<<<<<< HEAD
import RegisterView from "../views/RegisterView.vue"
import GameView from '../views/GameView.vue'
import MarketplaceView from "@/views/MarketplaceView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/login',
            name: 'login',
            component: ConnexionView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/game',
            name: 'game',
            component: GameView
        },
        {
            path: '/marketplace/items',
            name: 'marketplace',
            component: MarketplaceView
        }
    ]
=======
import RegisterView from "@/views/RegisterView.vue"
import MarketplaceView from "@/views/MarketplaceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/login',
      name: 'login',
      component: ConnexionView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/marketplace/items',
      name: 'marketplace',
      component: MarketplaceView
    }
  ]
>>>>>>> 8b5411e38d623042ab6f9dfeaf42cf00130a3cd9
})

export default router
