'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** popup class */
class Popup {
  constructor() {
    this._popup = $('#popup');
    this._popupContainer = this._popup.$('.popup--container');
    this._popupCloseButton = this._popup.$('.popup--close-button');
    this._currentModal = null;
  }

  /** public methods */
  initEvents() {
    events
      .on('open-popup', this._popupOpenHandler.bind(this))
      .on('close-popup', this._popupCloseHandler.bind(this));
  }

  /** private methods */

  // handlers
  _popupOpenHandler(popup) {
    this._popup.add('.is-open');
    this._popupCloseButton.on('click', this._closeButtonClickHandler);
    $.body.block();
  
    if( popup ) {
      const modalComponent = $.clone(popup.name);
      this._popupContainer.append(modalComponent);
      this._togglePopupContainerClassname(popup.name);
      this._currentModal = popup;
    }
  }
  _popupCloseHandler() {
    this._popup.add('.is-close');
    this._popup.remove('.is-open');
    this._popupCloseButton.off('click', this._closeButtonClickHandler);
  
    setTimeout(() => {
      this._popup.remove('.is-close');
      $.body.unblock();
  
      if( this._currentModal ) {
        const modalClassName = this._currentModal.name;
        this._popupContainer.$(`.${modalClassName}`).remove();
        this._togglePopupContainerClassname(modalClassName);
        this._currentModal = null;
      }
    }, 200);
  }
  _closeButtonClickHandler() {
    events.emit('close-popup');
  }

  // help functions
  _togglePopupContainerClassname(className) {
    this._popupContainer.toggle(`.popup--${className}-modal`);
  }
}

/** export */
export default Popup;