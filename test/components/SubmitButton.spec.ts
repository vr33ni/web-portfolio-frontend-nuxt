// import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
// import {
//   BootstrapVue,
//   BootstrapVueIcons,
//   BButton,
//   BSpinner,
//   BIcon,
// } from 'bootstrap-vue'
// import SubmitButton from '@/components/SubmitButton.vue'

// describe('components/SubmitButton', () => {
//   const localVue = createLocalVue()

//   beforeAll(() => {
//     localVue.use(BootstrapVue)
//     localVue.use(BootstrapVueIcons)
//   })

//   test('should disable button if isSubmitting is set', () => {
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: true },
//     })

//     expect(wrapper.findComponent(BButton).attributes().disabled).toBeTruthy()
//   })

//   test('should not disable button', () => {
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: false },
//     })

//     expect(wrapper.findComponent(BButton).attributes().disabled).toBeFalsy()
//   })

//   test('should show default submit label while loading', () => {
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: true },
//     })

//     expect(wrapper.text()).toContain('components.loadingButton.submitLabel')
//   })

//   test('should show custom submit label while loading', () => {
//     const label = 'Loading...'
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: {
//         variant: 'primary',
//         disabled: false,
//         isSubmitting: true,
//         submittingLabel: label,
//       },
//     })

//     expect(wrapper.text()).toContain(label)
//   })

//   test('should show submit label and spinner while loading', () => {
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: true },
//     })

//     expect(wrapper.text()).toContain('components.loadingButton.submitLabel')
//     expect(wrapper.findComponent(BSpinner)).toBeDefined()
//   })

//   test('should show button label while not loading', () => {
//     const label = 'Button Label'
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: false },
//       slots: {
//         default: label,
//       },
//     })

//     expect(wrapper.text()).toContain(label)
//   })

//   test('should show button label and icon while not loading', () => {
//     const label = 'Button Label'
//     const wrapper = shallowMount(SubmitButton, {
//       localVue,
//       propsData: {
//         variant: 'primary',
//         disabled: false,
//         isSubmitting: false,
//         icon: 'x',
//       },
//       slots: {
//         default: label,
//       },
//     })

//     expect(wrapper.text()).toContain(label)
//     expect(wrapper.findComponent(BIcon)).toBeDefined()
//   })

//   test('should emit click event when clicked', async () => {
//     const label = 'Button Label'
//     const wrapper = mount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: false },
//       slots: {
//         default: label,
//       },
//     })

//     wrapper.findComponent(BButton).trigger('click')
//     await wrapper.vm.$nextTick()

//     expect(wrapper.emitted().click).toBeTruthy()
//   })

//   test('should use variant primary as default', () => {
//     const wrapper = mount(SubmitButton, {
//       localVue,
//       propsData: { disabled: false, isSubmitting: false },
//     })

//     expect(wrapper.findComponent(BButton).classes()).toContain('btn-primary')
//   })

//   test('should use custom variant if given', () => {
//     const wrapper = mount(SubmitButton, {
//       localVue,
//       propsData: { variant: 'secondary', disabled: false, isSubmitting: false },
//     })

//     expect(wrapper.findComponent(BButton).classes()).toContain('btn-secondary')
//   })
// })
