'use strict';

/** sizes object */
const sizes = {
  width() {
    return this._el.offsetWidth
  },
  height() {
    return this._el.offsetHeight
  }
};

/** export */
export default sizes;