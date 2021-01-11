
/**
 * Event
 * @param {String} name
 */
// eslint-disable-next-line max-classes-per-file
class Event {
  constructor(name) {
    this.name = name
    this.callbacks = []
  }
}

/**
 * Manager
 */
class Manager {
  constructor() {
    const channelName = `${process.env.REACT_APP_NAME}-channel`
    this.events = {}
    this.uniqueId = 1;
    this.broadcastChannel = new BroadcastChannel(channelName)
    this.broadcastChannel.onmessage = ({ data }) => {
      this.dispatchEvent(data.name, data.args || null)
    }
  }

  /**
   * Dispatching Event
   * @param {String} name
   * @param args
   */
  dispatchEvent(name, args) {
    if (this.events[`on${name}`]) {
      this.events[`on${name}`].callbacks.forEach(({ callback }) => {
        callback(args)
      })
    }
  }

  /**
   * Dispatching Event
   * @param {String} name
   * @param args
   */
  dispatchGlobalEvent(name, args) {
    if (this.events[`on${name}`]) {
      this.events[`on${name}`].callbacks.forEach(({ callback }) => {
        callback(args)
      })
      this.broadcastChannel.postMessage({ name, args })
    }
  }

  /**
   * Adding Event Listener
   * @param {String} name
   * @param {Function} callback
   */
  addEventListener(name, callback) {
    if (!this.events[name]) {
      this.events[name] = new Event(name)
    }
    const id = this.uniqueId++;
    this.events[name].callbacks.push({ id, callback })

    return () => {
      this.events[name].callbacks = this.events[name]
        .callbacks.filter(callback => callback.id !== id)
    }
  }

  /**
   * Remmove Event Listener
   * @param {String} name
   */
  removeEventListener(name) {
    if (!this.events[name]) {
      delete this.events[name]
    }
  }
}

export default new Manager()
