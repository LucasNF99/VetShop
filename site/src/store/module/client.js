import { client } from 'app/api/index';


const getters = {
  getClient: state => state.items,
};

const actions = {
  async getClient({ commit }) {
    try {
      const { data: items } = await client.list();
      commit('UPDATE_CLIENT', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createClient({ commit }, payload) {
    try {
      const { data } = await client.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updateClient({ commit }, payload) {
    try {
      const { data } = await Client.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteClient({ commit }, payload) {
    try {
      const { data } = await client.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_CLIENT(state, items) {
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
