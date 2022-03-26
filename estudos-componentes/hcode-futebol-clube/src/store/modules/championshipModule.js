export default {
  state: {
    championship: 'Campeonato Brasileiro'
  },
  getters: {
    getChampionship: function(state) {
      return state.championship
    }
  },
  mutations: {
    setChampionship: function(state, newChampionship) {
      state.championship = newChampionship
    }
  },
  actions: {
    changeChampionship: function(context, value) {
      context.commit('setChampionship', value)
    }
  }
}