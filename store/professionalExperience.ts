import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
 import { ProfessionalExperienceService } from '~/services'

@Module({
  name: 'professionalExperience',
  stateFactory: true,
  namespaced: true,
})
export default class ProfessionalExperienceModule extends VuexModule {
  private skills: [] = [];
  private entries: [] = [];

  get ProgrammingSkills() {
    return this.skills
  }

  get ProfEntries() {
    return this.entries
  }
 
  
  @Action({ rawError: true })
  async fetchProgrammingSkills() {
      const response = await ProfessionalExperienceService.fetchProgrammingSkills()
      this.setProgrammingSkills(response);
  }

  @Action({ rawError: true })
  async fetchEntries() {
      const response = await ProfessionalExperienceService.fetchEntries()
      this.setEntries(response);
  }

  @Mutation
  setProgrammingSkills(skills: []) {
    this.skills = skills;
  }

  @Mutation
  setEntries(entries: []) {
    this.entries = entries;
  }
}