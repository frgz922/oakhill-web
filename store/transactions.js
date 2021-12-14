export const state = () => ({
  transactionTypes: [],
});

/* transactionTypes 
 
  {
    transactionType: string,
    short: string,
  }
 
 * */

export const getters = {
  getTransactionTypes(state) {
    return state.transactionTypes;
  },
};

export const mutations = {
  setTransactionTypes(state, transactionTypes) {
    state.transactionTypes = transactionTypes;
  },
};

export const actions = {
  async fetchTransactionTypes({ commit }) {
    const trTypes = await this.$fetchCinchyQuery("getTransactionType");
    await commit("setTransactionTypes", trTypes);
  },
};
