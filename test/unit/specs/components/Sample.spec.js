import Vue from 'vue'
import Sample from '@/components/Sample'

describe('Sample.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Sample)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.sample h1').textContent)
      .toEqual('Sample')
  })
})
