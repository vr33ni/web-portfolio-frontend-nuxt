// import { createLocalVue, shallowMount } from '@vue/test-utils'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import OrderStatus from '@/components/OrderList/OrderStatus.vue'
// import { getMockedOrder } from '@/test/mocks'
// import { OrderPosition, OrderStatus as Status, PositionStatus } from '~/models'

// describe('components/OrderListItem', () => {
//   const localVue = createLocalVue()

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//   })

//   test('show order status done', () => {
//     const order = getMockedOrder(Status.Done)
//     const wrapper = shallowMount(OrderStatus, {
//       localVue,
//       propsData: { order },
//     })

//     expect(wrapper.html()).toContain('components.orderStatus.done')
//     expect(wrapper.html()).not.toContain('components.orderStatus.inProgress')
//     expect(wrapper.html()).not.toContain('components.orderStatus.unknown')
//   })

//   test('show order status inProgress', () => {
//     const order = getMockedOrder(Status.InProgress)
//     order.positions[0] = new OrderPosition({
//       id: order.positions[0].id,
//       productID: order.positions[0].productID,
//       status: PositionStatus.Approved,
//       isResponsible: true,
//     })
//     const wrapper = shallowMount(OrderStatus, {
//       localVue,
//       propsData: { order },
//     })

//     expect(wrapper.html()).not.toContain('components.orderStatus.done')
//     expect(wrapper.html()).toContain('components.orderStatus.inProgress')
//     expect(wrapper.html()).not.toContain('components.orderStatus.unknown')
//     expect(wrapper.html()).toContain('1/' + order.positions.length)
//   })

//   test('show order status created', () => {
//     const order = getMockedOrder(Status.Created)
//     const wrapper = shallowMount(OrderStatus, {
//       localVue,
//       propsData: { order },
//     })

//     expect(wrapper.html()).not.toContain('components.orderStatus.done')
//     expect(wrapper.html()).toContain('components.orderStatus.inProgress')
//     expect(wrapper.html()).not.toContain('components.orderStatus.unknown')
//     expect(wrapper.html()).toContain('0/' + order.positions.length)
//   })

//   test('show order status unknown', () => {
//     const order = getMockedOrder(0)
//     const wrapper = shallowMount(OrderStatus, {
//       localVue,
//       propsData: { order },
//     })

//     expect(wrapper.html()).not.toContain('components.orderStatus.done')
//     expect(wrapper.html()).not.toContain('components.orderStatus.inProgress')
//     expect(wrapper.html()).toContain('components.orderStatus.unknown')
//   })
// })
