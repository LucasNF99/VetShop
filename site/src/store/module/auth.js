/* eslint-disable */
import cookie from 'app/src/utils/cookies';
import { auth } from 'app/api/index';

const getters = {
  getIsLogged: state => state.isUserLogged,
  getName: state => state.user.nome,
}

const actions = {
  async login ({ commit }, payload) {
    try {
      const { data } = await auth.login(payload)
      console.log(data)
      commit('LOGIN_SUCCESSFUL', JSON.parse(JSON.stringify(data)))
      cookie('token', 'set', data.token, 30)
      cookie('nome', 'set', data.usuario.nome, 30)

      return { status: true, data }
    } catch (error) {
      return { status: false, error }
    }
  },

  logout ({ commit }) {
    commit('LOGOUT')
    cookie('token', 'remove')
    cookie('nome', 'remove')
    return { status: true }
  },
};

const mutations = {
  LOGIN_SUCCESSFUL (state, data) {
    state.isUserLogged = true;
    state.user.token = data.token;
    state.user.nome = data.usuario.nome;
  },

  LOGOUT (state) {
    state.isUserLogged = false;
    state.user.nome = '';
    state.user.token = '';
  },
};

const initialStateUser = {
  token: cookie('token', 'get'),
  nome: cookie('nome', 'get'),
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
