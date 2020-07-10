'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** sign class */
class Sing {
  constructor() {
    this._singFrame = $('#sing-frame');
    this._closeButton = this._singFrame.$('.sing-frame--close-button');

    this._currentSignType = '';
  }
  /** public methods */
  initEvents() {
    events
      .on('sing-in', this._singInEventHandler.bind(this))
      .on('sing-up', this._singUpEventHandler.bind(this))
  }

  /** private methods */

  // handlers
  _singInEventHandler() {
    this._updateCurrentSignType('sing-in');
    this._setCloseButtonEvent();
    this._showSingFrame();
  }
  _singUpEventHandler() {
    this._updateCurrentSignType('sing-up');
    this._setCloseButtonEvent();
    this._showSingFrame();
  }

  // events
  _setCloseButtonEvent() {
    this._closeButton.on('click', this._hideSignFrame.bind(this));
  }
  _removeCloseButtonEvent() {
    this._closeButton.off('click', this._hideSignFrame.bind(this));
  }

  // view
  _showSingFrame() {
    this._singFrame.add(`.is-${this._currentSignType}`);
  }
  _hideSignFrame() {
    this._singFrame.remove(`.is-${this._currentSignType}`);
    this._removeCloseButtonEvent();
  }

  // help methods
  _updateCurrentSignType(type) {
    this._currentSignType = type;
  }
}

/** export */
export default Sing;