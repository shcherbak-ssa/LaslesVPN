'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** buttons-module */
class ButtonsModule {
  /** private properties */
  _buttons = $('[data-button]', true);
  _buttonsHandlers = new Map();

  /** static methods */
  static init() {
    const buttonsModule = new ButtonsModule();
    buttonsModule._buttons.forEach((button) => {
      buttonsModule._setButtonClickHandler(button)
    });
    events.on(
      'set-button-event',
      buttonsModule._setButtonEventHandler.bind(buttonsModule)
    );
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
export default ButtonsModule;