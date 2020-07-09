'use strict';

/** imports */
import Element from './element';

/** query functions */
function queryFirstElement(selector, element = document) {
  const firstFoundElement = element.querySelector(selector);
  return Element.create(firstFoundElement);
}
function queryAllElements(selector, element = document) {
  const allFoundElements = element.querySelectorAll(selector);
  return allFoundElements.map((element) => Element.create(element));
}

/** export */
export default {
  firstElement: queryFirstElement,
  allElements: queryAllElements
};