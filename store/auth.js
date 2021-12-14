// The key that cinchySDK uses to store auth data
const cinchyStorageKey =
  "oidc.user:http://35.183.146.63/AssetManagement/cinchysso:advisor-portal";
const getCinchyAuthData = () => {
  return sessionStorage.getItem(cinchyStorageKey)
    ? JSON.parse(sessionStorage.getItem(cinchyStorageKey))
    : {};
};
const removeCinchyAuthData = () => {
  sessionStorage.clear();
};

export const state = () => ({
  userName: null,
  userToken: null,
});

export const mutations = {
  setAuthData(state, { userName, token }) {
    state.userName = userName;
    state.userToken = token;
  },
};

export const getters = {
  isAuthenticated(state) {
    return !!state.userToken;
  },
  getUserFullName(state) {
    return state.userName;
  },
};

export const actions = {
  async hydrateStorageAuthData({ commit }) {
    const { access_token, profile } = getCinchyAuthData();
    if (access_token && profile) {
      await commit("setAuthData", {
        userName: profile ? profile.id : null,
        token: access_token,
      });
    }
  },
  async hydrateAuthData({ commit }, { token, userName }) {
    await commit("setAuthData", {
      userName,
      token,
    });
  },
  async clearAuthData({ commit }) {
    const { access_token, profile } = getCinchyAuthData();
    if (access_token && profile) {
      removeCinchyAuthData();
    }
    await commit("setAuthData", {
      userName: null,
      token: null,
    });
  },
};
