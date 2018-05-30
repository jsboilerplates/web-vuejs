import Vue from 'vue'
import Footer from './Footer'

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Footer')
  })
})
