// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import ProductItem from '@/components/ProductItem.vue'
// import { getMockedProduct } from '../mocks'

// describe('components/ProductItem', () => {
//   const localVue = createLocalVue()

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//   })

//   test('show tool details', () => {
//     const product = getMockedProduct()
//     const wrapper = shallowMount(ProductItem, {
//       localVue,
//       propsData: { product },
//     })

//     expect(wrapper.text()).toContain(product.name)
//     expect(wrapper.text()).toContain(product.version)
//     expect(wrapper.text()).toContain(product.description)
//   })
// })
