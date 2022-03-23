import { $axios } from '~/utils/api'


/**
 * Includes service calls which are related to education.
 */
export const EducationService = {
 
  async fetchEduEntries() {
    const entries = await $axios.$get('/edu') 
    return entries
  },

}
