import { sale } from 'app/api/index';


const getters = {
  getSale: state => state.items,
};

const actions = {
  async getSale({ commit }) {
    try {
      const { data: items } = await sale.list();
      commit('UPDATE_SALE', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createSale({ commit }, payload) {
    try {
      const { data } = await sale.create(payload);
      return data;
    } catch (error) {
      console.log(error);
      return { status: false, error };
    }
  },
  async updateSale({ commit }, payload) {
    try {
      const { data } = await sale.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteSale({ commit }, payload) {
    try {
      const { data } = await sale.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_SALE(state, items) {
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
