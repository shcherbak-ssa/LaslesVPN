'use strict';

/** imports */
import $ from './tools';
import events from './events';
import SingForm from './sing-form';
import singData from '../data/sing-data.json';

/** sign-module */
class SingModule {
  /** private properties */
  _singFrame = $('#sing-frame');
  _closeButton = this._singFrame.$('.sing-frame--close-button');
  _singForm = new SingForm(this._singFrame);
  _singData = singData;
  _currentSignType = '';

  /** static methods */
  static init() {
    const singModule = new SingModule();
    events
      .on(
        'sing-in',
        singModule._singInEventHandler.bind(singModule)
      )
      .on(
        'sing-up',
        singModule._singUpEventHandler.bind(singModule)
      )
  }

  /** private methods */

  // handlers
  _singInEventHandler() {
    this._showSingFrame('sing-in');
  }
  _singUpEventHandler() {
    this._showSingFrame('sing-up');
  }
  _changeSingEventHandler(type) {
    this._removeCurrentSingTypeClass();
    this._updateCurrentSignType(type);
    this._addCurrentSingTypeClass();
    this._updateSingForm();
  }
  _closeButtonClickHandler() {
    this._hideSignFrame();
    this._removeChangeSingEvent();
    this._removeCloseButtonClickEvent();

    this._singForm.removeSingFormEvents();
    this._singForm.refreshInputs()
  }

  // view
  _showSingFrame(type) {
    $.body.block();

    this._updateCurrentSignType(type);
    this._addCurrentSingTypeClass();
    this._updateSingForm();

    this._setSingFrameEvents();
  }
  _hideSignFrame() {
    $.body.unblock();
    this._removeCurrentSingTypeClass();
  }

  // events
  _setSingFrameEvents() {
    this._setCloseButtonClickEvent();
    this._singForm.setSingFormEvents();

    this._setChangeSingEvent();
  }
  _setCloseButtonClickEvent() {
    this._closeButtonClickHandlerBind = this._closeButtonClickHandler.bind(this);
    this._closeButton.on('click', this._closeButtonClickHandlerBind);
  }
  _removeCloseButtonClickEvent() {
    this._closeButton.off('click', this._closeButtonClickHandlerBind);
  }
  _setChangeSingEvent() {
    this._changeSingEventHandlerBind = this._changeSingEventHandler.bind(this);
    events.on('change-sing', this._changeSingEventHandlerBind);
  }
  _removeChangeSingEvent() {
    events.off('change-sing', this._changeSingEventHandlerBind);
  }

  // update
  _updateCurrentSignType(type) {
    this._currentSignType = type;
  }
  _updateSingForm() {
    const singData = this._getCurrentSingData();
    this._singForm.updateSingForm(this._currentSignType, singData);
  }

  // help methods
  _getCurrentSingData() {
    return this._singData[this._currentSignType];
  }
  _addCurrentSingTypeClass() {
    this._singFrame.add(`.is-${this._currentSignType}`);
  }
  _removeCurrentSingTypeClass() {
    this._singFrame.remove(`.is-${this._currentSignType}`);
  }
}

/** export */
export default SingModule;