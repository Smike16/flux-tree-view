'use strict';

import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function dispatch(type, payload) {
  flux.dispatch({ type, payload });
}

export function register(callback) {
  flux.register(callback);
}
