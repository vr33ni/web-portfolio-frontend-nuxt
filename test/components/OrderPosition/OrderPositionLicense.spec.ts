// import { createLocalVue, shallowMount } from '@vue/test-utils'
// import {
//   BFormDatepicker,
//   BFormInput,
//   BFormSelect,
//   BootstrapVue,
//   BootstrapVueIcons,
// } from 'bootstrap-vue'
// import OrderPositionLicense from '@/components/OrderPosition/OrderPositionLicense.vue'
// import { getMockedPosition } from '~/test/mocks'
// import { fullDate } from '~/plugins/filters'

// describe('components/OrderPosition/OrderPositionLicense', () => {
//   const localVue = createLocalVue()
//   const mockedPosition = getMockedPosition()
//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//     localVue.filter('fullDate', fullDate)
//     localVue.directive('b-tooltip', {})
//   })

//   test('show position license and expiration date readonly', () => {
//     const wrapper = shallowMount(OrderPositionLicense, {
//       localVue,
//       propsData: {
//         position: mockedPosition,
//         selectedLicense: mockedPosition.licenseType,
//         selectedExpirationDate: mockedPosition.licenseExpirationDate,
//         readonly: true,
//       },
//     })

//     expect(wrapper.text()).toContain(mockedPosition.licenseType)
//     expect(wrapper.text()).toContain(
//       mockedPosition.licenseExpirationDate?.getFullYear()
//     )
//     expect(wrapper.findComponent(BFormInput).exists()).toBeFalsy()
//   })

//   test('show position license and expiration date editable', () => {
//     const wrapper = shallowMount(OrderPositionLicense, {
//       localVue,
//       propsData: {
//         position: mockedPosition,
//         selectedLicense: mockedPosition.licenseType,
//         selectedExpirationDate: mockedPosition.licenseExpirationDate,
//         readonly: false,
//         disabled: false,
//       },
//     })

//     expect(wrapper.text()).not.toContain(mockedPosition.licenseType)
//     expect(wrapper.text()).not.toContain(
//       mockedPosition.licenseExpirationDate?.getFullYear()
//     )
//     expect(wrapper.findAllComponents(BFormSelect).exists()).toBeTruthy()
//     expect(wrapper.findAllComponents(BFormDatepicker).exists()).toBeTruthy()
//     expect(wrapper.findComponent(BFormSelect).props().disabled).toBeFalsy()
//     expect(wrapper.findComponent(BFormDatepicker).props().disabled).toBeFalsy()
//   })

//   test('show position license and expiration date disabled', () => {
//     const wrapper = shallowMount(OrderPositionLicense, {
//       localVue,
//       propsData: {
//         position: mockedPosition,
//         selectedLicense: mockedPosition.licenseType,
//         selectedExpirationDate: mockedPosition.licenseExpirationDate,
//         readonly: false,
//         disabled: true,
//       },
//     })

//     expect(wrapper.text()).not.toContain(mockedPosition.licenseType)
//     expect(wrapper.text()).not.toContain(
//       mockedPosition.licenseExpirationDate?.getFullYear()
//     )
//     expect(wrapper.findComponent(BFormSelect).props().disabled).toBeTruthy()
//     expect(wrapper.findComponent(BFormDatepicker).props().disabled).toBeTruthy()
//   })
// })
