export default {
  state: {
    clubName: 'HCode Treinamentos'
  },
  getters: {
    getClubName: function(state) {
      return state.clubName
    }
  },
  mutations: {
    setClubName: function(state, newClubName) {
      state.clubName = newClubName
    }
  },
  actions: {
    changeClubName: function(context, value) {
      context.commit('setClubName', value)
    }
  }
}