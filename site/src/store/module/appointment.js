import { appointment } from 'app/api/index';


const getters = {
  getAppointment: state => state.items,
};

const actions = {
  async getAppointment({ commit }) {
    try {
      const { data: items } = await appointment.list();
      commit('UPDATE_APPOINTMENT', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createAppointment({ commit }, payload) {
    try {
      const { data } = await appointment.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updateAppointment({ commit }, payload) {
    try {
      const { data } = await appointment.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteAppointment({ commit }, payload) {
    try {
      const { data } = await appointment.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_APPOINTMENT(state, items) {
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
