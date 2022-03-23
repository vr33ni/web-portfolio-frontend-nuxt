// import { createLocalVue, mount } from '@vue/test-utils'
// import {
//   BootstrapVue,
//   BootstrapVueIcons,
//   BFormDatepicker,
//   BFormSelect,
//   BFormTextarea,
// } from 'bootstrap-vue'
// import ProductItem from '@/components/ProductItem.vue'
// import PositionItem from '@/components/OrderPosition/OrderPositionItem.vue'
// import SubmitButton from '@/components/SubmitButton.vue'
// import OrderPositionStatus from '@/components/OrderPosition/OrderPositionStatus.vue'
// import { getMockedPosition } from '../../mocks'
// import { fullDate } from '~/plugins/filters'
// import { OrderPosition } from '~/models'

// describe('components/OrderPosition/OrderPositionItem', () => {
//   const localVue = createLocalVue()
//   const setup = (position: OrderPosition) => {
//     return mount(PositionItem, {
//       localVue,
//       propsData: { position },
//       mocks: {
//         $storeModules: {
//           products: {
//             fetchProduct: jest.fn(),
//             ByID: jest.fn().mockReturnValue(position.productID),
//           },
//         },
//       },
//     })
//   }

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//     localVue.filter('fullDate', fullDate)
//     localVue.directive('b-tooltip', {})
//   })

//   test('show position details with active inputs', async () => {
//     const isResponsible = true
//     const position = getMockedPosition(isResponsible)
//     const wrapper = setup(position)

//     await wrapper.vm.$nextTick()

//     expect(wrapper.findComponent(OrderPositionStatus)).toBeDefined()
//     expect(wrapper.findComponent(ProductItem)).toBeDefined()
//     expect(wrapper.text()).toContain(position.licenseType)
//     expect(wrapper.findComponent(BFormDatepicker).props().disabled).toBe(false)
//     expect(wrapper.findComponent(BFormSelect).props().disabled).toBe(false)
//     expect(wrapper.findComponent(SubmitButton).props().disabled).toBe(false)
//     expect(wrapper.findComponent(BFormTextarea).props().disabled).toBe(false)
//     expect(wrapper.text()).not.toContain(
//       'components.orderPositionItem.notResponsibleInfo'
//     )
//   })

//   test('disabled inputs if users is not responsible for the position', async () => {
//     const isResponsible = false
//     const position = getMockedPosition(isResponsible)
//     const wrapper = setup(position)

//     await wrapper.vm.$nextTick()

//     expect(wrapper.findComponent(OrderPositionStatus)).toBeDefined()
//     expect(wrapper.findComponent(ProductItem)).toBeDefined()
//     expect(wrapper.text()).toContain(position.licenseType)
//     expect(wrapper.findComponent(BFormDatepicker).exists()).toBeFalsy()
//     expect(wrapper.findComponent(BFormSelect).exists()).toBeFalsy()
//     expect(wrapper.findComponent(SubmitButton).exists()).toBeFalsy()
//     expect(wrapper.findComponent(BFormTextarea).exists()).toBeFalsy()
//     expect(wrapper.text()).toContain(
//       'components.orderPositionItem.notResponsibleInfo'
//     )
//   })

//   test('disabled inputs if position is currently being approved', async () => {
//     const isResponsible = true
//     const position = getMockedPosition(isResponsible)
//     const wrapper = setup(position)

//     wrapper.setData({ approving: true })
//     await wrapper.vm.$nextTick()

//     expect(wrapper.findComponent(OrderPositionStatus)).toBeDefined()
//     expect(wrapper.findComponent(ProductItem)).toBeDefined()
//     expect(wrapper.text()).toContain(position.licenseType)
//     expect(wrapper.findComponent(BFormDatepicker).props().disabled).toBe(true)
//     expect(wrapper.findComponent(BFormSelect).props().disabled).toBe(true)
//     expect(wrapper.findComponent(SubmitButton).props().disabled).toBe(true)
//     expect(wrapper.findComponent(BFormTextarea).props().disabled).toBe(true)
//     expect(wrapper.text()).not.toContain(
//       'components.orderPositionItem.notResponsibleInfo'
//     )
//   })
// })
