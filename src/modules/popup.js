'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** popup class */
class Popup {
  constructor() {
    this._popup = $('#popup');
    this._popupContainer = this._popup.$('.popup--container');
  }

  /** public methods */
  initEvents() {
    events
      .on('open-popup', this._popupOpenHandler.bind(this))
      .on('close-popup', this._popupCloseHandler.bind(this));
  }

  /** private methods */
  _popupOpenHandler(position, modalComponentName) {
    this._popup.add('.is-open');
    this._popup.append(this._createPopupBgComponent(position));
    document.body.style.overflow = 'hidden';
  
    if( modalComponentName ) {
      const modal = $.clone(modalComponentName);
      this._popupContainer.append(modal);
    }
  }
  _createPopupBgComponent({top, left}) {
    const popupBgComponent = $.clone('popup-bg');
    popupBgComponent.styles({
      top: top + 'px',
      left: left + 'px'
    });
    return popupBgComponent;
  }
  
  _popupCloseHandler() {
    const popupBg = this._popup.$('.popup-bg');
    popupBg.add('.is-close');
  
    setTimeout(() => {
      this._popup.remove('.is-open');
      popupBg.remove();
      document.body.style.overflow = '';
  
      const popupContainerFirstChild = this._popupContainer.getFirstChild();
      if( popupContainerFirstChild ) popupContainerFirstChild.remove();
    }, 900);
  }
}

/** export */
export default Popup;