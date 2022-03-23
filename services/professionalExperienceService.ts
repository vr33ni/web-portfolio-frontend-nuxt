 import { $axios } from '~/utils/api'


/**
 * Includes service calls which are related to professional experience.
 */
export const ProfessionalExperienceService = {
 
  async fetchProgrammingSkills() {
    const skills = await $axios.$get('/programming') 
    return skills
  },

  async fetchEntries() {
    const entries = await $axios.$get('/prof') 
    return entries
  },

}
