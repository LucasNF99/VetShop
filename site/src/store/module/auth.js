/* eslint-disable */
import cookie from 'app/src/utils/cookies';
import { auth } from 'app/api/index';

const getters = {
  getIsLogged: state => state.isUserLogged,
  getName: state => state.user.nome,
  getProvider: state => state.user.provider,
}

const actions = {
  async login({ commit }, payload) {
    try {
      const { data } = await auth.login(payload)
      commit('LOGIN_SUCCESSFUL', JSON.parse(JSON.stringify(data)))
      cookie('token', 'set', data.token, 30)
      cookie('nome', 'set', data.usuario.nome, 30)
      cookie('provider', 'set', data.usuario.provider, 30)
      console.log(cookie('provider', 'get'));

      return { status: true, data }
    } catch (error) {
      return { status: false, error }
    }
  },

  logout({ commit }) {
    commit('LOGOUT')
    cookie('token', 'remove')
    cookie('nome', 'remove')
    cookie('provider', 'remove')
    return { status: true }
  },
};

const mutations = {
  LOGIN_SUCCESSFUL(state, data) {
    state.isUserLogged = true;
    state.user.token = data.token;
    state.user.nome = data.usuario.nome;
    state.user.provider = data.usuario.provider;
  },

  LOGOUT(state) {
    state.isUserLogged = false;
    state.user.nome = '';
    state.user.token = '';
    state.user.provider = false;
  },
};

const initialStateUser = {
  token: cookie('token', 'get'),
  nome: cookie('nome', 'get'),
  provider: cookie('provider', 'get'),
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
