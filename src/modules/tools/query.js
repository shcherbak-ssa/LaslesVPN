'use strict';

/** imports */
import Element from '../element';

/** query class */
class Query {
  firstElement(selector, element = document) {
    const firstFoundElement = element.querySelector(selector);
    return Element.create(firstFoundElement);
  }
  allElements(selector, element = document) {
    const allFoundElements = element.querySelectorAll(selector);
    return allFoundElements.map((element) => Element.create(element));
  }
}

/** export */
export default Query;