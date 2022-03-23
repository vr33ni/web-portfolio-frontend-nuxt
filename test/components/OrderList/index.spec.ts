// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import OrderList from '@/components/OrderList/index.vue'
// import OrderListItem from '@/components/OrderList/Item.vue'
// import SkeletonBar from '@/components/SkeletonBar.vue'
// import { getMockedOrders } from '@/test/mocks'
// import { Order } from '~/models'

// describe('components/OrderList', () => {
//   const localVue = createLocalVue()
//   const setup = (propsData: { orders: Order[]; isLoading: boolean }) =>
//     shallowMount(OrderList, {
//       localVue,
//       propsData,
//     })

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//   })

//   test('show all orders', () => {
//     const numberOfOrders = 3
//     const wrapper = setup({
//       orders: getMockedOrders(numberOfOrders),
//       isLoading: false,
//     })

//     expect(wrapper.findAllComponents(SkeletonBar)).toHaveLength(0)
//     expect(wrapper.findAllComponents(OrderListItem)).toHaveLength(
//       numberOfOrders
//     )
//   })

//   test('show loading instead of orders', () => {
//     const wrapper = setup({ orders: getMockedOrders(3), isLoading: true })

//     expect(wrapper.findAllComponents(OrderListItem)).toHaveLength(0)
//     expect(wrapper.findAllComponents(SkeletonBar)).not.toHaveLength(0)
//   })

//   test('show no orders found', () => {
//     const wrapper = setup({ orders: getMockedOrders(0), isLoading: false })

//     expect(wrapper.findAllComponents(OrderListItem)).toHaveLength(0)
//     expect(wrapper.text()).toContain('components.orderList.noOrders')
//   })
// })
