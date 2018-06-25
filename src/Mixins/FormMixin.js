export default {
    data() {
        return {
            form: {
                errors: {},
                loading: false,
                sender: window.axios.create(),
                status: null,
            },
        }
    },

    watch: {
        formIsLoading: {
            handler(status) {
                if (status === true) {
                    document.body.classList.add('form-is-loading')
                } else {
                    document.body.classList.remove('form-is-loading')
                }
            },
        },
    },

    computed: {
        formErrors: {
            get() {
                return this.$root.form
                    ? Object.assign({}, this.form.errors, this.$root.form.errors)
                    : Object.assign({}, this.form.errors)
            },
            set(newValue) {
                this.$set(this.form, 'errors', newValue)

                if (!this.$root.form) return

                this.$set(this.$root.form, 'errors', newValue)
            },
        },

        formIsLoading: {
            get() {
                return this.form.loading || this.$root.isLoading
            },
            set(newValue) {
                this.$set(this.form, 'loading', newValue)

                if (!this.$root.form) return

                this.$set(this.$root.form, 'loading', newValue)
            },
        },

        formHasErrors: {
            get() {
                return Object.keys(this.formErrors).length > 0
            },
        },

        formClass: {
            get() {
                return {
                    'form-is-available': !this.formIsLoading,
                }
            },
        },
    },

    methods: {
        setFormUnavailable() {
            this.formIsLoading = true
        },

        setFormAvailable() {
            this.formIsLoading = false
        },

        isFormValid(formRef = 'form') {
            if (!this.$refs[formRef]) return true

            return this.$refs[formRef].validate()
        },

        clearFormErrors() {
            this.formErrors = {}
        },

        clearFieldErrors(field) {
            this.$delete(this.form.errors, field)
        },

        setFormErrors(response) {
            if (!response) return

            this.$set(this, 'formErrors', response.data.errors)
        },

        formError(field) {
            if (!this.formErrors) return false

            if (typeof this.formErrors[field] === 'string') return this.formErrors[field]
            if (typeof this.formErrors[field] === 'undefined') return ''

            return this.formErrors[field][0]
        },

        formFieldValid(element) {
            return this.formError(element) ? 'true' : 'false'
        },

        setFormStatus(response) {
            if (!response.status) return

            this.$set(this.form, 'status', response.status)

            if (!this.$root.form) return

            this.$set(this.$root.form, 'status', response.status)
        },

        getForm(formTarget, formData, formRef = 'form') {
            this.clearFormErrors()

            if (!this.isFormValid(formRef)) return false

            this.setFormUnavailable()

            return this.form.sender.get(formTarget, formData)
        },

        postForm(formTarget, formData, formRef = 'form') {
            this.clearFormErrors()

            if (!this.isFormValid(formRef)) return false

            this.setFormUnavailable()

            return this.form.sender.post(formTarget, formData)
        },

        deleteForm(formTarget, formData, formRef = 'form') {
            this.clearFormErrors()

            if (!this.isFormValid(formRef)) return false

            this.setFormUnavailable()

            return this.form.sender.delete(formTarget, formData)
        },
    },

    created() {
        /**
         * Hook into axios requests to set the form loading status and check for errors
         */
        this.form.sender.interceptors.request.use((config) => {
            this.setFormUnavailable()

            return Promise.resolve(config)
        }, (error) => {
            this.setFormAvailable()
            this.setFormStatus(error.response)
            this.setFormErrors(error.response)

            return Promise.reject(error)
        })

        /**
         * Hook into the axios response to set the form loading status and check for errors
         */
        this.form.sender.interceptors.response.use((event) => {
            this.setFormAvailable()
            this.setFormErrors(event.response)

            return Promise.resolve(event)
        }, (error) => {
            this.setFormAvailable()
            this.setFormStatus(error.response)
            this.setFormErrors(error.response)

            return Promise.reject(error)
        })
    },
}
