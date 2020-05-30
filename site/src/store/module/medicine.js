import { medicine } from 'app/api/index';

console.log(medicine);

const getters = {
  getMedicine: state => state.items,
};

const actions = {
  async getMedicine({ commit }) {
    try {
      const { data: items } = await medicine.list();
      commit('UPDATE_MEDICINE', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createMedicine({ commit }, payload) {
    try {
      console.log('PAY', payload)
      await medicine.create(payload);
      return true;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_MEDICINE(state, items) {
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
