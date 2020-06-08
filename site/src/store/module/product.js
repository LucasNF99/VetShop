import { product } from 'app/api/index';


const getters = {
  getProduct: state => state.items,
};

const actions = {
  async getProduct({ commit }) {
    try {
      const { data: items } = await product.list();
      commit('UPDATE_PRODUCT', items);
      return items;
    } catch (error) {
      return { status: false, error };
    }
  },
  /* eslint-disable */
  async createProduct({ commit }, payload) {
    try {
      const { data } = await product.create(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async updateProduct({ commit }, payload) {
    try {
      const { data } = await product.update(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
  async deleteProduct({ commit }, payload) {
    try {
      const { data } = await product.delete(payload);
      return data;
    } catch (error) {
      return { status: false, error };
    }
  },
};

const mutations = {
  UPDATE_PRODUCT(state, items) {
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
