'use strict';

/** imports */
import Element from './element';

/** children object */
const children = {
  children() {
    const elementChildren = [...this._el.children];
    return elementChildren.map((element) => Element.create(element));
  }
};

/** export */
export default children;