'use strict';

/** imports */
import events from './events';

/** sing-form class */
class SingForm {
  constructor(singFrame) {
    this._singFormHeader = singFrame.$('.sing-form--header');
    this._singFormInputs = singFrame.$('.sing-form--input', true);
    this._singFormButton = singFrame.$('.sing-form--button');
    this._singFormLink = singFrame.$('.sing-form--link');

    this._currentSingType = '';
  }

  /** public methods */
  updateSingForm(type, singData) {
    const {header, buttonValue, linkText} = singData;
    this._updateSingFormHeader(header);
    this._updateSingFormButton(buttonValue);
    this._updateSingFormLink(linkText);

    this._updateCurrentSingType(type);
  }
  setSingFormEvents() {
    this._setSingFormLinkEvent();
    this._setSingFormInputsEvents();
  }
  removeSingFormEvents() {
    this._removeSingFormLinkEvent();
    this._removeSingFormInputsEvents();
  }
  refreshInputs() {
    this._singFormInputs.forEach((input) => {
      events.emit('refresh-input', input);
    })
  }

  /** private methods */

  // update
  _updateSingFormHeader(header) {
    this._singFormHeader.text(header);
  }
  _updateSingFormButton(buttonValue) {
    this._singFormButton.text(buttonValue);
  }
  _updateSingFormLink(linkText) {
    this._singFormLink.text(linkText)
  }
  _updateCurrentSingType(type) {
    this._currentSingType = type;
  }

  // events
  _setSingFormLinkEvent() {
    this._singFormLinkClickHandlerBind = this._singFormLinkClickHandler.bind(this);
    this._singFormLink.on('click', this._singFormLinkClickHandlerBind);
  }
  _removeSingFormLinkEvent() {
    this._singFormLink.off('click', this._singFormLinkClickHandlerBind);
  }
  _setSingFormInputsEvents() {
    this._singFormInputs.forEach((input) => {
      events.emit('set-input-events', input);
    })
  }
  _removeSingFormInputsEvents() {
    this._singFormInputs.forEach((input) => {
      events.emit('remove-input-events', input);
    })
  }
  

  // handlers
  _singFormLinkClickHandler(event) {
    event.preventDefault();
    
    const changedSingType = this._currentSingType === 'sing-in' ? 'sing-up' : 'sing-in';
    events.emit('change-sing', changedSingType);

    this.refreshInputs();
  }
}

/** export */
export default SingForm;