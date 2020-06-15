import { patient } from 'app/api/index';


const getters = {
  getPatient: state => state.items,
};

const actions = {
  async getPatient({ commit }) {
    try {
      const { data: items } = await patient.list();
      commit('UPDATE_PATIENT', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createPatient({ commit }, payload) {
    try {
      const { data } = await patient.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updatePatient({ commit }, payload) {
    try {
      const { data } = await patient.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deletePatient({ commit }, payload) {
    try {
      const { data } = await patient.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_PATIENT(state, items) {
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
