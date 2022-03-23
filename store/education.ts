import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { EducationService } from '~/services'

@Module({
  name: "education",
  stateFactory: true,
  namespaced: true
})
export default class BrandingModule extends VuexModule {
  private entries: [] = [];
 
  get EduEntries() {
    return this.entries
  }
 
  
  @Action({ rawError: true })
  async fetchEntries() {
      const response = await EducationService.fetchEduEntries()
      this.setEntries(response);
  }


  @Mutation
  setEntries(entries: []) {
    this.entries = entries;
  }
 
}