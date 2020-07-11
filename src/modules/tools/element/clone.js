'use strict';

/** imports */
import Element from './element';

/** clone object */
const clone = {
  clone() {
    const clonedElement = this._el.cloneNode(true);
    return Element.create(clonedElement);
  }
};

/** export */
export default clone;