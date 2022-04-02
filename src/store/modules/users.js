export default {
  state: {
    users: []
  },

  mutations: {
    ADD_USER (state, payload) {
      state.users.push(payload)
    },

    ADD_ALL_USERS (state, payload) {
      state.users = payload
    }
  },

  getters: {
    getAllUsers (state) {
      return state.users
    }
  },

  actions: {
    // Загрузить юзера
    loadUsersData ({ commit }) {
      console.log('LOADING')
    },
    addAllUsers ({ commit }, data) {
      commit('ADD_ALL_USERS', data)
    },
    // добавить юзера
    addUser ({ commit }, data) {
      console.log(data)
      commit('ADD_USER', data)
    }
  }
}
