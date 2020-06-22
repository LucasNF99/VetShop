/* eslint-disable */
import cookie from '@utils/cookies'
import { auth } from '@api/index'

const getters = {
  getIsLogged: state => state.isUserLogged,
  getName: state => state.user.name,
}

const actions = {
  async login ({ commit }, payload) {
    try {
      const { data } = await auth.login(payload)
      commit('LOGIN_SUCCESSFUL', JSON.parse(JSON.stringify(data)))
      cookie('token', 'set', data.token, 30)

      return { status: true, data }
    } catch (error) {
      return { status: false, error }
    }
  },


  logout ({ commit }) {
    commit('LOGOUT')
    cookie('token', 'remove')
    cookie('name', 'remove')
    return { status: true }
  },
};

const mutations = {
  LOGIN_SUCCESSFUL (state, data) {
    state.isUserLogged = true,
    state.user.token = data.token,
  },

  LOGOUT (state) {
    state.isUserLogged = false,
    state.user.email = '',
    state.user.token = '',
  },
};

const initialStateUser = {
  token: cookie('token', 'get'),
  name: cookie('name', 'get'),
};

const state = {
  isUserLogged: cookie('token', 'has'),
  user: initialStateUser,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};