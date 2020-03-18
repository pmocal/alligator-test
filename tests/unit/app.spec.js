import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App', () => {
	// Inspect the raw component options
	it('has data', () => {
		expect(typeof App.data).toBe('function')
	})
})

describe('Mounted App', () => {
	const wrapper = mount(App);

	test('is a Vue instance', () => {
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('renders the correct markup', () => {
	  expect(wrapper.html()).toContain('<p>What is the sum of the two numbers?</p>')
	})

	// it's also easy to check for the existence of elements
	it('has a buttons', () => {
	  expect(wrapper.contains('button')).toBe(true)
	})

	it('renders correctly with different data', async () => {
		wrapper.setData({ x1: 5, x2: 10 })
		await wrapper.vm.$nextTick()
		expect(wrapper.text()).toContain('10')
	})

	it('button click without correct sum', () => {
	  expect(wrapper.vm.message).toBe("")
	  const button = wrapper.find('button')
	  button.trigger('click')
	  expect(wrapper.vm.message).toBe('TRY AGAIN')
	})

	it('button click with correct sum', () => {
	  wrapper.setData({ guess: "15" })
	  const button = wrapper.find('button')
	  button.trigger('click')
	  expect(wrapper.vm.message).toBe('SUCCESS!')
	})

	// // Evaluate the results of functions in
	// // the raw component options
	// it('sets the correct default data', () => {
	// 	expect(typeof MyComponent.data).toBe('function')
	// 	const defaultData = MyComponent.data()
	// 	expect(defaultData.message).toBe('hello!')
	// })

	// // Inspect the component instance on mount
	// it('correctly sets the message when created', () => {
	// 	expect(wrapper.vm.$data.message).toBe('bye!')
	// })

	// // Mount an instance and inspect the render output
	// it('renders the correct message', () => {
	// 	expect(wrapper.text()).toBe('bye!')
	// })
})