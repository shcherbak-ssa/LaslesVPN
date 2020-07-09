'use strict';

/** imports */
import Element from './element';
import events from './events';

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
    input.add('.is-active');

    const inputField = input.$('.base-input--input');
    inputField.focus();
    inputField.on('blur', this._inputBlurHandler.bind(this));
  }
  _inputBlurHandler({target}) {
    const input = this._createElement(target.parentElement);
    const inputType = input.get(':data-input-type');
    input.remove('.is-active');
    console.log(inputType);
  }

  // help methods
  _createElement(element) {
    return Element.create(element)
  }
}

/** export */
export default Inputs;