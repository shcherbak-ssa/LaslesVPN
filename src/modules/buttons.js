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
    this._buttons.forEach((button) => this._setButtonClickHandler(button));
    events.on('set-button-event', this._setButtonEventHandler.bind(this));
  }

  /** private methods */
  _setButtonClickHandler(button) {
    button.on('click', this._buttonClickHandler)
  }
  _buttonClickHandler({target}) {
    const buttonClickEvent = target.dataset.button;
    if( buttonClickEvent ) events.emit(buttonClickEvent);
  }
  _setButtonEventHandler(button) {
    this._setButtonClickHandler(button);
  }
}

/** export */
export default Buttons;