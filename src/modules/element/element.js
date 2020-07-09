'use strict';

/** imports */
import query from './query';

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
    return all ? query.allElements(selector, this._el) : query.firstElement(selector, this._el);
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
      return this._classes.contains(this._cutFirstElement(what))
    }
  }
  toggle(what) {
    if( this._isClassName(what) ) {
      return this._classes.toggle(this._cutFirstElement(what))
    }
  }
  add(what) {
    if( this._isClassName(what) ) {
      return this._classes.add(this._cutFirstElement(what))
    }
  }
  remove(what) {
    if( !what ) {
      return this._el.remove();
    }
    if( this._isClassName(what) ) {
      return this._classes.remove(this._cutFirstElement(what))
    }
  }

  styles(styles) {
    for( let [property, value] of Object.entries(styles) ) {
      this._el.style[property] = value;
    }
  }

  append(element) {
    this._el.append(element.getElement());
  }
  prepend(element) {
    this._el.prepend(element.getElement());
  }

  getElement() {
    return this._el;
  }

  /** private methods */
  _isClassName(string) {
    return string.startsWith('.');
  }
  _cutFirstElement(string) {
    return string.slice(1);
  }
}

/** export */
export default Element;