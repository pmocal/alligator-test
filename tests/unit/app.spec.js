import { mount, shallowMount } from '@vue/test-utils'
import App from './../../src/App.vue'
import Calculator from './../../src/components/Calculator.vue'

describe('App', () => {
	const wrapper = shallowMount(App)

	test('is a Vue instance', () => {
		expect(wrapper.isVueInstance()).toBeTruthy()
	})	
})

describe('App and Calculator', () => {
	const wrapper = mount(App)

	it('renders the correct markup', () => {
	  expect(wrapper.html()).toContain('<p>What is the sum of the two numbers?</p>')
	})

	// it's also easy to check for the existence of elements
	it('has a buttons', () => {
	  expect(wrapper.contains('button')).toBe(true)
	})

	// Inspect the raw component options
	it('has a data hook', () => {
		expect(typeof wrapper.find(Calculator).vm.$methods).toBe('function')
	})

	it('renders correctly with different props', () => {
		expect(
			getMountedComponent(MyComponent, {
				msg: 'Hello'
			}).text()
		).toBe('Hello')

		expect(
			getMountedComponent(MyComponent, {
				msg: 'Bye'
			}).text()
		).toBe('Bye')
	})

	// Inspect the generated HTML after a state update
	it('updates the rendered message when wrapper.message updates', async () => {
		const wrapper = shallowMount(MyComponent)
		wrapper.setData({ message: 'foo' })

		// Wait a "tick" after state change before asserting DOM updates
		await wrapper.vm.$nextTick()
		expect(wrapper.text()).toBe('foo')
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof MyComponent.data).toBe('function')
		const defaultData = MyComponent.data()
		expect(defaultData.message).toBe('hello!')
	})

	// Inspect the component instance on mount
	it('correctly sets the message when created', () => {
		expect(wrapper.vm.$data.message).toBe('bye!')
	})

	// Mount an instance and inspect the render output
	it('renders the correct message', () => {
		expect(wrapper.text()).toBe('bye!')
	})
})