import { Store } from 'vuex'
import Vue from 'vue'

import { getModule } from 'vuex-module-decorators'

import ProfessionalExperienceModule from '~/store/professionalExperience'
import BrandingModule from '~/store/branding'
import ScreenSizeModule from '~/store/screenSize'
import EducationModule from '~/store/education'


/**
 * See https://github.com/championswimmer/vuex-module-decorators#accessing-modules-with-nuxtjs
 */

export function initialiseStores(store: Store<any>): void {
  const storeModules: StoreModules = {
    professionalExperience: getModule(ProfessionalExperienceModule, store),
    branding: getModule(BrandingModule, store),
    screenSize: getModule(ScreenSizeModule, store),
    education: getModule(EducationModule, store),


  }

  Vue.prototype.$storeModules = storeModules
}

export interface ComponentCustomProperties {
  $store: Store<StoreModules>
}

export interface StoreModules {
  readonly professionalExperience: ProfessionalExperienceModule
  readonly branding: BrandingModule
  readonly screenSize: ScreenSizeModule
  readonly education: EducationModule


}
