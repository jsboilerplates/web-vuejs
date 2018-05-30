import uppercase from './uppercase/UppercaseFilter'
import limit from './limit/LimitFilter'

export default {
  install (Vue) {
    Vue.filter('uppercase', uppercase)
    Vue.filter('limit', limit)
  }
}
