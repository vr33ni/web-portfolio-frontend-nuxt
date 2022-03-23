// import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import AuthenticatedUser from '@/components/AuthenticatedUser.vue'
// import Vuex from 'vuex'

// describe('components/AuthenticatedUser', () => {
//   const localVue = createLocalVue()
//   const setup = (oidcUser: any): Wrapper<AuthenticatedUser> =>
//     shallowMount(AuthenticatedUser, {
//       localVue,
//       store: new Vuex.Store({
//         modules: {
//           oidc: {
//             getters: {
//               oidcUser: () => oidcUser,
//             },
//             namespaced: true,
//           },
//         },
//       }),
//     })

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//     localVue.use(Vuex)
//   })

//   test('show user name', () => {
//     const ifxGuy = { name: 'Infineon Guy' }
//     const wrapper = setup(ifxGuy)

//     expect(wrapper.text()).toContain(ifxGuy.name)
//   })

//   test('show placeholder for user name', () => {
//     const wrapper = setup(undefined)

//     expect(wrapper.text()).toContain(
//       'components.authenticatedUser.namePlaceholder'
//     )
//   })
// })
