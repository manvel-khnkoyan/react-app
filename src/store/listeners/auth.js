import Manager from "../../library/manager";
import { logOut, logIn } from "../actions/auth";

export default store => {
  Manager.addEventListener("onLogIn", params => {
    store.dispatch(logIn(params));
  });
  Manager.addEventListener("onLogOut", () => {
    store.dispatch(logOut());
  });
};
