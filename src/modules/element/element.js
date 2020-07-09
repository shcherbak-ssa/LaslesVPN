'use strict';

/** imports */
import $ from '../tools';
import insert from './insert';

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
    return all ? $.query.allElements(selector, this._el) : $.query.firstElement(selector, this._el);
  }
  on(event, handler) {
    this._el.addEventListener(event, handler);
  }
  clone() {
    const clonedElement = this._el.cloneNode(true);
    return Element.create(clonedElement);
  }

  contains(what) {
    if( this._isClassName(what) ) {
      return this._classes.contains($.cut.firstElement(what))
    }
  }
  toggle(what) {
    if( this._isClassName(what) ) {
      return this._classes.toggle($.cut.firstElement(what))
    }
  }
  add(what) {
    if( this._isClassName(what) ) {
      return this._classes.add($.cut.firstElement(what))
    }
  }
  remove(what) {
    if( !what ) {
      return this._el.remove();
    }
    if( this._isClassName(what) ) {
      return this._classes.remove($.cut.firstElement(what))
    }
  }

  styles(styles) {
    for( let [property, value] of Object.entries(styles) ) {
      this._el.style[property] = value;
    }
  }

  getElement() {
    return this._el;
  }

  /** private methods */
  _isClassName(string) {
    return string.startsWith('.');
  }
}

/** inheritance */
Object.assign(Element.prototype, insert);

/** export */
export default Element;