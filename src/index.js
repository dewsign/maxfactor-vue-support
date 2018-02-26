// Modules
import FormatNumber from './Modules/FormatNumber'

// Vue Mixins
import FormMixin from './Mixins/FormMixin'

// Vue Filters
import DefaultFilter from './Filters/DefaultFilter'
import MoneyFilter from './Filters/MoneyFilter'
import PercentageFilter from './Filters/PercentageFilter'

const Maxfactor = {
    install(Vue) {
        Vue.mixin(FormMixin)
        Vue.filter('default', DefaultFilter)
        Vue.filter('money', MoneyFilter)
        Vue.filter('percentage', PercentageFilter)
    },
}

export default Maxfactor

export {
    FormatNumber,
    FormMixin,
    DefaultFilter,
    MoneyFilter,
    PercentageFilter,
}
