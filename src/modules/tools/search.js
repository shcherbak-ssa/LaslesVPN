'use strict';

/** imports */
import Element from './element';
import query from './query';

/** search function */
const $ = (selector, all = false) => {
  return searchElementsBySelector(selector, all);
};

/** help functions */
function searchElementsBySelector(selector, all) {
  switch( selector[0] ) {
    case '#':
      const foundElement = document.getElementById(selector.slice(1));
      return Element.create(foundElement);
    default:
      return all ? query.allElements(selector) : query.firstElement(selector);
  }
}

/** exports */
export default $;