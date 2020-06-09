const initialState = {
  accessToken: null
};

export default function authReducer(state = initialState, action) {
  if (action.type === "login") {
    return {
      accessToken: action.accessToken
    };
  }
  if (action.type === "logout") {
    return {
      accessToken: null
    };
  }
  return state;
}
