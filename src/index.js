import FormMixin from './Mixins/FormMixin'

const Maxfactor = {
    install(Vue) {
        Vue.mixin(FormMixin)
    },
}

export default Maxfactor

export {
    FormMixin,
}
