'use strict';

/** insert object */
const insert = {
  append(element) {
    this._el.append(element.getElement());
  },
  prepend(element) {
    this._el.prepend(element.getElement());
  }
};

/** export */
export default insert;