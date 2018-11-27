


export const setUser = ({commit}, user) => {
  commit('userStatus', user);
};

export const setAuthUrl = ({commit}, authUrl) => {
  commit('mu_authUrl', authUrl);
};
