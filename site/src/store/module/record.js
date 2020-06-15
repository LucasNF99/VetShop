import { record } from 'app/api/index';


const getters = {
  getRecord: state => state.items,
};

const actions = {
  async getRecord({ commit }) {
    try {
      const { data: items } = await record.list();
      commit('UPDATE_RECORD', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createRecord({ commit }, payload) {
    try {
      const { data } = await record.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updateRecord({ commit }, payload) {
    try {
      const { data } = await record.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteRecord({ commit }, payload) {
    try {
      const { data } = await record.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_RECORD(state, items) {
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
