const axios = require("axios");
const { apiWrapper } = require("../library/wrappers");
const Storage = require("../storage").default;
const domain = process.env.REACT_APP_BACKEND_HOST;

const defaultHeaders = {};
const contentHeaders = { "Content-Type": "application/json" };

export default {
  /**
   * Authenticate
   * @param {Object} credentials
   * */
  async authorize(credentials) {
    const result = await apiWrapper(axios.post)(`${domain}/auth`, credentials, {
      headers: { ...defaultHeaders, ...contentHeaders }
    });
    return result.data;
  },

  /**
   * Get My User
   * */
  async getMyProfile() {
    const result = await apiWrapper(axios.get)(`${domain}/users/me`);
    return result.data;
  }
};

/*
 *
 * */
axios.interceptors.request.use(config => {
  if (Storage.getItem("accessToken")) {
    config.headers.Authorization = `Bearer ${Storage.getItem("accessToken")}`;
  }
  return config;
});
