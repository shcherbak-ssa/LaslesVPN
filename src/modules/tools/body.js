'use strict';

/** body class */
class Body {
  _body = document.body;

  /** public methods */
  block() {
    this._body.style.overflow = 'hidden';
  }
  unblock() {
    this._body.style.overflow = '';
  }
}

/** export */
export default Body;