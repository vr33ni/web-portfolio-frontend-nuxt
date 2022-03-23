// import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import OrderListItem from '@/components/OrderList/Item.vue'
// import UserItem from '@/components/UserItem.vue'
// import PositionItem from '@/components/OrderPosition/OrderPositionItem.vue'
// import { getMockedOrders } from '@/test/mocks'
// import { fullDate } from '~/plugins/filters'

// describe('components/OrderListItem', () => {
//   const localVue = createLocalVue()

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//     localVue.filter('fullDate', fullDate)
//     localVue.directive('b-tooltip', {})
//   })

//   test('show order information', async () => {
//     const order = getMockedOrders(1)[0]
//     const wrapper = shallowMount(OrderListItem, {
//       localVue,
//       propsData: { order },
//     })
//     await wrapper.vm.$nextTick()

//     expect(wrapper.text()).toContain(order.orderNumber)
//     expect(wrapper.text()).toContain(fullDate(order.orderDate))
//     expect(wrapper.findComponent(UserItem)).toBeDefined()
//   })

//   test.skip('show ordered positions', async () => {
//     const order = getMockedOrders(1)[0]
//     const wrapper = mount(OrderListItem, { localVue, propsData: { order } })

//     expect(wrapper.find('.collapse').element.style.display).toEqual('none')
//     wrapper.find('#order-list-item-header').trigger('click')
//     await wrapper.vm.$nextTick()

//     expect(wrapper.find('.collapse').element.style.display).not.toEqual('none')
//     expect(wrapper.findAllComponents(PositionItem)).toHaveLength(
//       order.positions.length
//     )
//   })
// })
