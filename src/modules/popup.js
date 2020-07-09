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
  _popupOpenHandler({position, modal}) {
    this._popup.add('.is-open');
    this._popup.append(this._createPopupBgComponent(position));
    this._popupCloseButton.on('click', this._closeButtonClickHandler);
    document.body.style.overflow = 'hidden';
  
    if( modal ) {
      const modalComponent = $.clone(modal.name);
      this._popupContainer.append(modalComponent);
      this._togglePopupContainerClassname(modal.name);
      this._currentModal = modal;
    }
  }
  _popupCloseHandler() {
    this._popup.remove('.is-open');
    this._popup.add('.is-close');
    this._popupCloseButton.off('click', this._closeButtonClickHandler);
  
    setTimeout(() => {
      this._popup.remove('.is-close');
      this._popup.$('.popup-bg').remove();
      document.body.style.overflow = '';
  
      if( this._currentModal ) {
        const modalClassName = this._currentModal.name;
        this._popupContainer.$(`.${modalClassName}`).remove();
        this._togglePopupContainerClassname(modalClassName);
        this._currentModal = null;
      }
    }, 500);
  }
  _closeButtonClickHandler() {
    events.emit('close-popup');
  }

  // help functions
  _createPopupBgComponent({top, left}) {
    const popupBgComponent = $.clone('popup-bg');
    popupBgComponent.styles({
      top: top + 'px',
      left: left + 'px'
    });
    return popupBgComponent;
  }
  _togglePopupContainerClassname(className) {
    this._popupContainer.toggle(`.popup--${className}-modal`);
  }
}

/** export */
export default Popup;