import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import OriginStore from '@/store'
import HomePage from './HomePage'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage.vue', () => {
  let store
  beforeEach(() => {
    store = {...OriginStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallow(HomePage, {
      store,
      localVue
    })
    expect(wrapper.find('h1').text())
      .toEqual('Home Page')
  })
})
