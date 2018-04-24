import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import MockStore from '../config/store'
import HomePage from '@/pages/HomePage'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage.vue', () => {
  let store
  beforeEach(() => {
    store = MockStore.createNewStore()
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
