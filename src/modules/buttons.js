'use strict';

/** imports */
import $ from './tools';

/** buttons handlers */

/** buttons class */
class Buttons {
  constructor() {
    this._buttons = $('[data-button]', true);
    this._buttonsHandlers = new Map();
  }

  /** public methods */
  initEvents() {
    this._buttons.forEach((button) => {
      button.on('click', this._buttonClickHandler.bind(this))
    })
  }

  /** private methods */
  _buttonClickHandler({target, clientX: left, clientY: top}) {
    const dataButtonAttributeValue = ''
  }
}

/** export */
export default Buttons;