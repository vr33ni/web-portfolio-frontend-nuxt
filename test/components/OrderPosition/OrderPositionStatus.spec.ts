// import { createLocalVue, shallowMount } from '@vue/test-utils'
// import { BFormTextarea, BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import OrderPositionStatus from '@/components/OrderPosition/OrderPositionStatus.vue'
// import { PositionStatus } from '@/models'

// describe('components/OrderPosition/OrderPositionStatus', () => {
//   const localVue = createLocalVue()

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//     localVue.directive('b-tooltip', {})
//   })

//   test('show position status as waiting', () => {
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: { status: PositionStatus.Created },
//     })

//     expect(wrapper.text()).toContain(
//       'components.orderPositionStatus.verificationPending'
//     )
//   })

//   test('show position status as approved', () => {
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: { status: PositionStatus.Approved },
//     })

//     expect(wrapper.text()).toContain('components.orderPositionStatus.approved')
//   })

//   test('show position status as rejected', () => {
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: { status: PositionStatus.Rejected },
//     })

//     expect(wrapper.text()).toContain('components.orderPositionStatus.rejected')
//   })

//   test('show position status comment readonly', () => {
//     const comment = 'This is the test commment.'
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: {
//         status: PositionStatus.Approved,
//         comment,
//         readonly: true,
//       },
//     })

//     expect(wrapper.text()).toContain(comment)
//     expect(wrapper.findComponent(BFormTextarea).exists()).toBeFalsy()
//   })

//   test('show position status comment editable', () => {
//     const comment = 'This is the test commment.'
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: {
//         status: PositionStatus.Approved,
//         comment,
//         readonly: false,
//         disabled: false,
//       },
//     })

//     expect(wrapper.text()).not.toContain(comment)
//     expect(wrapper.findComponent(BFormTextarea).exists()).toBeTruthy()
//     expect(wrapper.findComponent(BFormTextarea).props().disabled).toBeFalsy()
//   })

//   test('show position status comment disabled', () => {
//     const comment = 'This is the test commment.'
//     const wrapper = shallowMount(OrderPositionStatus, {
//       localVue,
//       propsData: {
//         status: PositionStatus.Approved,
//         comment,
//         readonly: false,
//         disabled: true,
//       },
//     })

//     expect(wrapper.findComponent(BFormTextarea).props().disabled).toBeTruthy()
//   })
// })
