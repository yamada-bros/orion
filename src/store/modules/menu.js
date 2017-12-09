import types from '../mutation_type'

const state = {
    isOpen: false
}

const getters = {
    isOpen: state => state.isOpen
}

const actions = {
    openMenu({commit}){
        commit(types.MENU_OPEN)
    },
    closeMenu({commit}){
        commit(types.CLOSE)
    },
    toggleMenu({commit}){
        commit(types.MENU_TOGGLE)
    }
}

const mutations = {
    [types.MENU_OPEN](state) {
        state.isOpen = true
    },
    [types.MENU_CLOSE](state) {
        state.isOpen = false
    },
    [types.MENU_TOGGLE](state) {
        state.isOpen = !state.isOpen
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}