import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module({
  name: "screenSize",
  stateFactory: true,
  namespaced: true
})
export default class ScreenSizeModule extends VuexModule {
  private isSmallScreen: boolean = false;
  private isExtraSmallScreen: boolean = false;

  get IsSmallScreen() {
    return this.isSmallScreen
  }
  get IsExtraSmallScreen() {
    return this.isExtraSmallScreen
  }
  
  @Action({ rawError: true })
  setSmallScreen() {
     this.smallScreen();
  }
  @Action({ rawError: true })
  unsetSmallScreen() {
    this.smallScreen();
  }
  @Action({ rawError: true })
  setExtraSmallScreen() {
    this.extraSmallScreen();
  }
  @Action({ rawError: true })
  unsetExtraSmallScreen() {
    this.noExtraSmallScreen();
  }

  @Mutation
  extraSmallScreen() {
    this.isExtraSmallScreen = true;
  }
  @Mutation
  noExtraSmallScreen() {
    this.isExtraSmallScreen = false;
  }

  @Mutation
  smallScreen() {
    this.isSmallScreen = true;
  }

  @Mutation
  noSmallScreen() {
    this.isSmallScreen = false;
  }
}
