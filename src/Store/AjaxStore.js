/* eslint-disable no-param-reassign */

import axios from 'axios'
import { set } from 'vue'

class AjaxStore {
    constructor(options = {}) {
        this.action = options.action || ''
        this.method = options.method || 'GET'

        return this.getStore()
    }

    getActionUrlForLocale(locale = 'en') {
        return this.action.replace('__locale__', locale)
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
                    set(state.items, state.locale, items)
                },

                updateLoading: (state, loading) => {
                    set(state, 'loading', loading)
                },

                updateErrors: (state, errors) => {
                    set(state, 'errors', errors)
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
                        url: this.getActionUrlForLocale(state.locale),
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
