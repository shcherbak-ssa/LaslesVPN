'use strict';

/** events object */
const events = {
  on(event, handler) {
    this._el.addEventListener(event, handler);
  },
  off(event, handler) {
    this._el.removeEventListener(event, handler);
  }
};

/** export */
export default events;