// Modules
import FormatNumber from './Modules/FormatNumber'
import AjaxStore from './Store/AjaxStore'
import CmsConnector from './Store/CmsConnector'
import XModel from './Store/XModel'

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
    AjaxStore,
    CmsConnector,
    DefaultFilter,
    FormatNumber,
    FormMixin,
    MoneyFilter,
    PercentageFilter,
    XModel,
}
