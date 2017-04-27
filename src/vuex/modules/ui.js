const state = {
  showAdditionalPanels: false
}

const getters = {
  getShowAsidePanels: (state) => {
    return state.showAdditionalPanels
  }
}

const mutations = {
  showAdditionalPanels (state) {
    state.showAdditionalPanels = true
  },
  hideAdditionalPanels (state) {
    state.showAdditionalPanels = false
  }
}

export default {
  state,
  getters,
  mutations
}
