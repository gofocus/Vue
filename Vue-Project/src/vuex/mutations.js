export const userStatus = (state, user) => {
  if (user) {
    state.isLogin = true;
    state.currentUser = user;
    sessionStorage.setItem('currentUser', user);
  }
  else if (user === null) {
    // else if (user === "") {

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('currentUser');

    state.currentUser = null;
    state.isLogin = false;
    state.token = "";
  }
};
