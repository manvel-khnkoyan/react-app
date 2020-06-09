const Manager = require("./manager").default;

/*
 * Special working with Axios
 * */
export function apiWrapper(fn) {
  return async function() {
    const args = Array.from(arguments);
    try {
      return await fn(...args);
    } catch (e) {
      const status = e && e.response && e.response.status;
      if (status === 401) {
        Manager.dispatchEvent("LogOut");
      }
      throw e;
    }
  };
}
