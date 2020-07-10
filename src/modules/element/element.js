'use strict';

/** imports */
import $ from '../tools';
import actions from './actions';
import events from './events';
import clone from './clone';
import children from './children';
import insert from './insert';
import sizes from './sizes';
import styles from './styles';

/** element class */
class Element {
  constructor(element) {
    this._el = element;
    this._classes = this._el.classList;
  }

  /** static methods */
  static create(element) {
    return new Element(element);
  }

  /** public methods */
  $(selector, all = false) {
    return all
      ? $.query.allElements(selector, this._el)
      : $.query.firstElement(selector, this._el);
  }
  text(text) {
    this._el.innerHTML = text;
  }
  value(newValue) {
    if( newValue === '' || newValue ) {
      this._el.value = newValue;
      return;
    }
    return this._el.value;
  }
  getElement() {
    return this._el;
  }
}

/** inheritance */
const elementPrototype = Element.prototype;
const inheritance = (object) => Object.assign(elementPrototype, object);

inheritance(actions);
inheritance(events);
inheritance(clone);
inheritance(children);
inheritance(insert);
inheritance(sizes);
inheritance(styles);

/** export */
export default Element;