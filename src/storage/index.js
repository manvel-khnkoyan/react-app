import Manager from "../library/manager";
let storage = localStorage;

function getItems(obj) {
  const values = [],
    keys = Object.keys(obj);
  let i = keys.length;
  while (i--) {
    values.push({
      key: keys[i],
      value: obj.getItem(keys[i])
    });
  }
  return values;
}

function setItems(obj, values = []) {
  obj.forEach(item => {
    const { key, value } = item;
    obj.setItem(key, value);
  });
}

const changeStorage = name => {
  if (name === "localStorage") {
    setItems(localStorage, getItems(sessionStorage));
    sessionStorage.clear();
    storage = localStorage;
  }
  if (name === "sessionStorage") {
    setItems(sessionStorage, getItems(localStorage));
    localStorage.clear();
    storage = sessionStorage;
  }
};

Manager.addEventListener("onStorageChange", changeStorage);
Manager.addEventListener("onUpdateProfile", params => {
  const { profile } = params;
  storage.setItem("profile", JSON.stringify(profile));
});

Manager.addEventListener("onLogIn", params => {
  if (params.storage) {
    changeStorage(params.storage);
  }
  if (params.accessToken) {
    storage.setItem("accessToken", params.accessToken);
  }
});

Manager.addEventListener("onLogOut", () => {
  storage.removeItem("accessToken");
  storage.removeItem("profile");
});

export default storage;
