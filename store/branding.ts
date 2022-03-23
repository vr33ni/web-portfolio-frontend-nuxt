import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { BrandingService } from '~/services'

@Module({
  name: "branding",
  stateFactory: true,
  namespaced: true
})
export default class BrandingModule extends VuexModule {
  private logo: string = "";
  private profileImg: string = "";
 
  get Logo() {
    return this.logo
  }
 
  get ProfileImg() {
    return this.profileImg
  }
  
  @Action({ rawError: true })
  async fetchLogo() {
      const response = await BrandingService.fetchLogo()
       this.setLogo(response);
  }

  @Action({ rawError: true })
  async fetchProfileImg() {
      const response = await BrandingService.fetchProfileImg()
       this.setProfileImg(response);
  }


  @Mutation
  setLogo(logo: string) {
    this.logo = logo;
  }
 
  @Mutation
  setProfileImg(img: string) {
    this.profileImg = img;
  }
}
