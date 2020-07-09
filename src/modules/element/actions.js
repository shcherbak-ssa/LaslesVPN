'use strict';

/** imports */
import $ from '../tools';

/** actions object */
const actions = {
  contains(what) {
    if( this._isClassName(what) ) {
      return this._classes.contains($.cut.firstElement(what))
    }
  },
  toggle(what) {
    if( this._isClassName(what) ) {
      return this._classes.toggle($.cut.firstElement(what))
    }
  },
  add(what) {
    if( this._isClassName(what) ) {
      return this._classes.add($.cut.firstElement(what))
    }
  },
  remove(what) {
    if( !what ) {
      return this._el.remove();
    }
    if( this._isClassName(what) ) {
      return this._classes.remove($.cut.firstElement(what))
    }
  },
  focus() {
    this._el.focus();
  },
  get(what) {
    if( this._isAttribute(what) ) {
      return this._el.getAttribute($.cut.firstElement(what));
    }
  },
  /** private methods */
  _isClassName(string) {
    return string.startsWith('.');
  },
  _isAttribute(string) {
    return string.startsWith(':')
  }
};

/** export */
export default actions;