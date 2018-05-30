import Vue from 'vue'
import Navbar from './Navbar'

describe('Navbar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Navbar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Navbar')
  })
})
