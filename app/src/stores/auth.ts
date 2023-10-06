import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import axios from 'axios'

import type { UserLogin, UserRegister } from '@/types/user.interfaces'

const toast = useToast()

export const useAuthStore = defineStore('user', {
  state: () => ({
    userData: null
  }),

  actions: {
    async registerUser(form: UserRegister) {
      try {
        if (form) {
          if (form.password === form.confirmPassword) {
            const response = await axios.post('http://localhost:3001/auth/register', {
              username: form.username,
              password: form.password
            })
            this.userData = response.data
            if (this.userData && this.userData?.success === false) {
              toast.error(this.userData?.message, {
                timeout: 2000
              })
            } else {
              toast.success('You have been registered', {
                timeout: 2000
              })
            }
          }
        }
      } catch (error) {
        toast.error(`ERR0R: ${error}`, {
          timeout: 2000
        })
        return error
      }
    },
    async loginUser(form: UserLogin) {
      try {
        if (form) {
          if (form.password !== '') {
            const response = await axios.post('http://localhost:3001/auth/login', {
              username: form.username,
              password: form.password
            })
            this.userData = response.data
            localStorage.setItem('user', JSON.stringify(response.data))
            if (this.userData && this.userData?.success === false) {
              toast.error(this.userData?.message, {
                timeout: 2000
              })
            } else {
              toast.success('Successfully connected', {
                timeout: 2000
              })
            }
          }
        }
      } catch (err) {
        toast.error(`ERR0R: ${err}`, {
          timeout: 2000
        })
        return err
      }
    },

    async getMe(userId: string) {
      const response = await axios.get(`http://localhost:3001/me/${userId}`)
      localStorage.setItem('user', JSON.stringify(response.data.data.user))
      this.userData = response.data.data.user
      console.log('userData', this.userData?.pessinos)
    },

    async gainMoneyFromPlanet(userId: string) {
      if (userId !== undefined) {
        const response = await axios.put(`http://localhost:3001/planet/gain`, {
          userId: userId
        })
        this.userData = response.data.data.user
      }
    }
  }
})
