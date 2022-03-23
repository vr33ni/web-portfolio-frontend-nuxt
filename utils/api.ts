import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  $axios.setBaseURL(process.env.API_URL || 'http://localhost:8080')
}

export { $axios }
