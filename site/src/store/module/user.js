import { user } from 'app/api/index';


const getters = {
  getUser: state => state.items,
};

const actions = {
  async getUser({ commit }) {
    try {
      const { data: items } = await user.list();
      commit('UPDATE_USER', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createUser({ commit }, payload) {
    try {
      const { data } = await user.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updateUser({ commit }, payload) {
    try {
      const { data } = await user.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteUser({ commit }, payload) {
    try {
      const { data } = await user.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_USER(state, items) {
    state.items = items;
  },
};

const state = {
  items: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
