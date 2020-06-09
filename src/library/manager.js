/**
 * Event
 * @param {String} name
 */
function Event(name) {
  this.name = name;
  this.callbacks = [];
}

/**
 * Manager
 */
function Manager() {
  this.events = {};
}

/**
 * Dispatching Event
 * @param {String} name
 * @param args
 */
Manager.prototype.dispatchEvent = function(name, args) {
  if (this.events[`on${name}`]) {
    this.events[`on${name}`].callbacks.forEach(function(callback) {
      callback(args);
    });
  }
};

/**
 * Adding Event Listener
 * @param {String} name
 * @param {Function} callback
 */
Manager.prototype.addEventListener = function(name, callback) {
  if (!this.events[name]) {
    this.events[name] = new Event(name);
  }
  this.events[name].callbacks.push(callback);

  return () => {
    delete this.events[name];
  };
};

export default new Manager();
