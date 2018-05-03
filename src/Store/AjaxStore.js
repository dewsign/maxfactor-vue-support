/* eslint-disable no-param-reassign */

import axios from 'axios'

class AjaxStore {
    constructor(options = {}) {
        this.action = options.action || ''
        this.method = options.method || 'GET'

        return this.getStore()
    }

    getStore() {
        return {
            namespaced: true,

            state: {
                errors: [],
                items: {},
                locale: 'en',
                loading: false,
            },

            getters: {
                items: state => state.items,
                hasItems: state => state.items.length !== 0,
                loading: state => state.loading,
                errors: state => state.errors,
            },

            mutations: {
                updateItems: (state, items) => {
                    state.items = items
                },
                updateLoading: (state, loading) => {
                    state.loading = loading
                },
                updateErrors: (state, errors) => {
                    state.errors = errors
                },
            },

            actions: {
                updateItems: ({ commit }) => {
                    commit('updateLoading', true)

                    axios({
                        method: this.method,
                        url: this.action,
                    })
                        .then((response) => {
                            commit('updateLoading', false)
                            commit('updateItems', response.data)
                        })
                        .catch((error) => {
                            commit('updateLoading', false)
                            commit('updateErrors', error)
                        })
                },
            },
        }
    }
}

export default AjaxStore
