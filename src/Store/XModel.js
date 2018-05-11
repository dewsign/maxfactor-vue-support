export default {

    data() {
        return {
            frozenValue: {},
        }
    },

    props: {
        value: {
            required: true,
        },
    },

    watch: {
        frozenValue: {
            handler(newValue) {
                this.$emit('input', newValue)
            },
            deep: true,
        },

        value: {
            handler(newValue, oldValue) {
                if (oldValue === newValue) return

                this.frozenValue = Object.assign({}, this.value)
            },
            deep: true,
        },
    },

    mounted() {
        this.frozenValue = Object.assign({}, this.value)
    },

    render() {
        return this.$scopedSlots.default({
            value: this.frozenValue,
        })
    },

}
