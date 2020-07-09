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
    const updatedElements = [];
    const allFoundElements = element.querySelectorAll(selector);
    allFoundElements.forEach((element) => updatedElements.push(Element.create(element)))
    return updatedElements;
  }
}

/** export */
export default Query;