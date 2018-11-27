
export const userStatus = (state, user) => {
  if (user) {
    state.isLogin = true;
    state.currentUser = user;
    // sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
  else if (user === null) {
    // sessionStorage.removeItem('username');
    // sessionStorage.removeItem('userToken');
    // sessionStorage.removeItem('currentUser');

    state.currentUser = null;
    state.isLogin = false;
    state.token = "";
  }
};


export const mu_authUrl = (state, authUrl) => {
  if (authUrl !== "") {
    state.authUrl = authUrl;
  }
};
