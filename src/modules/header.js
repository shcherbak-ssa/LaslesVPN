'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** header-module class */
class HeaderModule {
  _header = $('#header');
  _burgerButton = this._header.$('.header--burger-button');
  _signButtons = this._header.$('.header--sing-buttons');
  _menuBgComponent = $.clone('menu-bg');
  _subscribeComponent = $.clone('subscribe');

  /** static methods */
  static init() {
    const headerModule = new HeaderModule();
    headerModule._burgerButton.on(
      'click',
      headerModule._burgerButtonClickHandler.bind(headerModule)
    );
    events.on('close-menu', () => {
      headerModule._header.remove('.is-menu-open');
      headerModule._closeMenu();
    });
  }

  /** private methods */
  _burgerButtonClickHandler({clientX: left, clientY: top}) {
    this._header.toggle('.is-menu-open');
    this._header.has('.is-menu-open') ? this._openMenu({top, left}) : this._closeMenu()
  }
  _openMenu({top, left}) {
    $.body.block();
      
    this._menuBgComponent.styles({
      top: top + 'px',
      left: left + 'px'
    });
    this._header.append(this._menuBgComponent);

    if( this._isWindowWithTabletWidth() ) {
      this._signButtons.prepend(this._subscribeComponent);
      events.emit('init-subscribe-events');
    }
  }
  _closeMenu() {
    $.body.unblock();
    this._header.add('.is-menu-close');

    setTimeout(() => {
      this._header.$('.menu-bg').remove()
      this._header.remove('.is-menu-close');

      if( this._isWindowWithTabletWidth() ) {
        this._signButtons.$('.subscribe').remove();
      }
    }, 400)
  }
  _isWindowWithTabletWidth() {
    return document.documentElement.clientWidth >= 768;
  }
}

/** export */
export default HeaderModule;