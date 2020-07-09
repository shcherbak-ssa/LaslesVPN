'use strict';

/** imports */
import Element from './element';
import events from './events';
import rules from './rules';

/** inputs class */
class Inputs {
  /** public methods */
  initEvents() {
    events.on('set-input-events', this._setInputEventsHandler.bind(this));
  }

  /** private methods */

  // handlers
  _setInputEventsHandler(input) {
    input.on('click', this._inputClickHandler.bind(this));
  }
  _inputClickHandler({target}) {
    const input = this._createElement(target);
    if( !input.has('.base-input') ) return;

    input.add('.is-active');
    input.remove('.is-success');
    input.remove('.is-error');

    const inputField = input.$('.base-input--input');
    inputField.focus();
    inputField.on('blur', this._inputBlurHandler.bind(this));

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

  // help methods
  _createElement(element) {
    return Element.create(element)
  }
  _checkInputValue(type, value) {
    switch(type) {
      case 'email': return rules.checkEmail(value);
    }
  }
}

/** export */
export default Inputs;