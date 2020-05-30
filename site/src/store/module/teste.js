import { store } from 'app/api/modules/medicine';

console.log(store);

const getters = {
  getMedicine: state => state.items,
};

const actions = {
  async getMedicine({ commit }) {
    try {
      console.log('Ola');
      const { data: medicine } = await store.list();
      console.log(medicine);
      commit('UPDATE_MEDICINE', medicine);
      return medicine;
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
