module.exports = {
  logIn(payload) {
    const { accessToken } = payload;
    return {
      type: "login",
      accessToken
    };
  },
  logOut() {
    return {
      type: "logout"
    };
  }
};
