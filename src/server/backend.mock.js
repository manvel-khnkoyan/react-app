
export default {
  /**
   * Authenticate
   * @param {Object} credentials
   * */
  async authorize(credentials) {
    return {
      data: {
        token: "TEST"
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
          name: "Manvel"
        }
      }
    };
  }
};
