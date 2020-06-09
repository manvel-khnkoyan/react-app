export default {
  /**
   * Authenticate
   * @param {Object} credentials
   * */
  async authorize(credentials) {
    return {
      data: {
        accessToken: "TEST"
      }
    };
  },

  /**
   * Get My User
   * */
  async getMyProfile() {
    return {
      data: {
        profile: {
          name: "Jhone"
        }
      }
    };
  }
};
