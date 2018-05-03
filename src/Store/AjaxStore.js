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
                errors: state => state.errors,
                items: state => state.items[state.locale] || [],
                locale: state => state.locale,
                loading: state => state.loading,
                hasItems: (state) => {
                    if (!state.items[state.locale]) return false

                    return state.items[state.locale].length !== 0
            },
            },

            mutations: {

                setLocale: (state, locale) => {
                    set(state, 'locale', locale)
                },

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

                setLocale: ({ commit }, locale = 'en') => {
                    commit('setLocale', locale)
                },

                updateItems: ({ commit, state }) => {
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
