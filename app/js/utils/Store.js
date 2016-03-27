'use strict';

import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {
  constructor(getters) {
    super();

    Object.keys(getters).forEach(getter => {
      return this[getter] = getters[getter];
    });
  }

  listen(callback) {
    this.addListener(CHANGE_EVENT, callback);
  }

  unlisten(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default Store;
