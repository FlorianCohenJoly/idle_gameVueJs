import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ConnexionView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from "../views/RegisterView.vue"
import GameView from '../views/GameView.vue'


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
        }
    ]
})

export default router
