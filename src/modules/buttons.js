'use strict';

/** imports */
import $ from './tools';
import events from './events';

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
    const dataButtonAttributeValue = target.dataset.button;
    events.emit('open-popup', {top, left});
  }
}

/** export */
export default Buttons;