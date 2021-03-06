'use strict';

/** imports */
import $ from './tools';
import events from './events';
import rules from './rules';

/** inputs-module */
class InputsModule {
  /** private properties */
  _eventHandlers = new Map();

  /** static methods */
  static init() {
    const inputsModule = new InputsModule();
    events
      .on(
        'set-input-events',
        inputsModule._setInputEventsHandler.bind(inputsModule)
      )
      .on(
        'remove-input-events',
        inputsModule._removeInputEventsHandler.bind(inputsModule)
      )
      .on(
        'refresh-input',
        inputsModule._refreshInputHandler.bind(inputsModule)
      )
  }

  /** private methods */

  // handlers
  _setInputEventsHandler(input) {
    this._saveEventHandler(input, this._inputClickHandler.bind(this));
    input.on('click', this._getEventHandler(input));
  }
  _removeInputEventsHandler(input) {
    input.off('click', this._getEventHandler(input));
    this._removeEventHandler(input);
  }
  _inputClickHandler({target}) {
    const input = this._createElement(target);
    if( !input.has('.base-input') ) return;

    input.add('.is-active');
    this._removeStatusClasses(input);

    const inputField = input.$('.base-input--input');
    inputField.on('blur', this._inputBlurHandler.bind(this));
    inputField.focus();

    const inputError = input.$('.base-input--error');
    inputError.text('');
  }
  _inputBlurHandler({target}) {
    const input = this._createElement(target.parentElement);
    const inputType = input.get(':data-input-type');
    const inputValue = target.value;
    
    input.remove('.is-active');
    if( inputValue === '' ) return;

    try {
      this._checkInputValue(inputType, inputValue);
      input.add('.is-success');
    } catch (error) {
      const inputError = input.$('.base-input--error');
      inputError.text(error.message);
      input.add('.is-error');
    }
  }
  _refreshInputHandler(input) {
    this._removeStatusClasses(input);

    const inputField = input.$('.base-input--input');
    inputField.value('');

    const inputError = input.$('.base-input--error');
    inputError.text('');
  }

  // events handelrs
  _saveEventHandler(forWhat, handler) {
    this._eventHandlers.set(forWhat, handler)
  }
  _getEventHandler(forWhat) {
    return this._eventHandlers.get(forWhat);
  }
  _removeEventHandler(forWhat) {
    this._eventHandlers.delete(forWhat);
  }

  // help methods
  _createElement(element) {
    return $.createElement(element)
  }
  _checkInputValue(type, value) {
    switch(type) {
      case 'email': return rules.checkEmail(value);
      case 'password': return rules.checkPassword(value);
    }
  }
  _removeStatusClasses(input) {
    input.remove('.is-success');
    input.remove('.is-error');
  }
}

/** export */
export default InputsModule;