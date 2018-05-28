import uppercase from './filter-uppercase'
import limit from './filter-limit'

export default {
  install (Vue) {
    Vue.filter('uppercase', uppercase)
    Vue.filter('limit', limit)
  }
}
