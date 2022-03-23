// import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
// import Vuex from 'vuex'
// import OrderInbox from '@/pages/orderInbox.vue'

// describe('pages/orderInbox', () => {
//   const localVue = createLocalVue()
//   const setup = (): Wrapper<OrderInbox> =>
//     shallowMount(OrderInbox, {
//       localVue,
//       mocks: {
//         $storeModules: {
//           orders: {
//             fetchAll: jest.fn().mockResolvedValue([]),
//             Orders: [],
//           },
//         },
//       },
//     })

//   beforeAll(() => {
//     localVue.use(Vuex)
//   })

//   test('show order inbox', () => {
//     const wrapper = setup()
//     expect(wrapper.find('h1').exists()).toBe(true)
//     expect(wrapper.find('h1').text()).toContain('layouts.sidebar.list-no-serial-boards')
//   })

//   test('fetch orders is called once', () => {
//     const wrapper = setup()

//     expect(wrapper.vm.$storeModules.orders.fetchAll).toHaveBeenCalledTimes(1)
//   })
// })
