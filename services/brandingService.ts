 import { $axios } from '~/utils/api'


/**
 * Includes service calls which are related to branding.
 */
export const BrandingService = {
 
  async fetchLogo() {
    const logo = await $axios.$get('/logo') 
    return logo
  },

  async fetchProfileImg() {
    const profileImg = await $axios.$get('/prof/img') 
    return profileImg
  },

}
