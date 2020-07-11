'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** popup-module */
class PopupModule {
  /** private properties */
  _popup = $('#popup');
  _popupBg = this._popup.$('.popup--bg');
  _popupContainer = this._popup.$('.popup--container');
  _popupCloseButton = this._popup.$('.popup--close-button');
  _currentPopup = null;

  /** static methods */
  static init() {
    const popupModule = new PopupModule();
    events
      .on(
        'open-popup',
        popupModule._popupOpenHandler.bind(popupModule)
      )
      .on(
        'close-popup',
        popupModule._popupCloseHandler.bind(popupModule)
      )
  }

  /** private methods */

  // handlers
  _popupOpenHandler(popup) {
    $.body.block();
    this._popup.add('.is-open');

    this._popupCloseButton.on('click', this._closePopupHandler);
    this._popupBg.on('click', this._closePopupHandler);
  
    if( popup ) {
      const modalComponent = $.clone(popup.name);
      this._popupContainer.append(modalComponent);
      this._togglePopupContainerClassname(popup.name);
      this._currentPopup = popup;
      popup.openCallback();
    }
  }
  _popupCloseHandler() {
    this._popup.add('.is-close');
    this._popup.remove('.is-open');

    this._popupCloseButton.off('click', this._closePopupHandler);
    this._popupBg.off('click', this._closePopupHandler);
  
    setTimeout(() => {
      $.body.unblock();
      this._popup.remove('.is-close');
  
      if( this._currentPopup ) {
        const modalClassName = this._currentPopup.name;
        this._popupContainer.$(`.${modalClassName}`).remove();
        this._togglePopupContainerClassname(modalClassName);
        this._currentPopup = null;
      }
    }, 200);
  }
  _closePopupHandler() {
    events.emit('close-popup');
  }

  // help functions
  _togglePopupContainerClassname(className) {
    this._popupContainer.toggle(`.popup--${className}-modal`);
  }
}

/** export */
export default PopupModule;