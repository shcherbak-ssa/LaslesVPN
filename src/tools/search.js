'use strict';

/** search function */
const $ = (element, selector) => {
  if( selector ) return searchElements(element, selector)
  
  selector = element;
  return searchElementsBySelector(selector);
};
$.one = (element, selector) => {
  return searchElement(element, selector);
}

/** help functions */
function searchElementsBySelector(selector) {
  const d = document;
  switch( selector[0] ) {
    case '#':
      return d.getElementById(selector.slice(1));
    case '.':
      return d.querySelectorAll(selector);
    default:
      throw new Error(`Unknow selector ${selector}`)
  }
}
function searchElement(element, selector) {
  return element.querySelector(selector);
}
function searchElements(element, selector) {
  return element.querySelectorAll(selector);
}

/** exports */
export default $;