'use strict';

/** imports */
import $ from '../tools';
import events from './events';

/** header class */
class Header {
  constructor() {
    this._header = $('#header');
    this._burgerButton = $.one(this._header, '.header--burger-button');
    this._signButtons = $.one(this._header, '.header--sing-buttons');
    this._menuBgComponent = $.reusable('menu-bg');
    this._subscribeComponent = $.reusable('subscribe');
  }

  /** public methods */
  init() {
    this._burgerButton.addEventListener('click', this._burgerButtonClickHandler.bind(this));
  }

  /** private methods */
  _burgerButtonClickHandler({clientX: left, clientY: top}) {
    this._header.classList.toggle('is-menu-open');

    if( this._header.classList.contains('is-menu-open') ) {
      //events.emit('open-popup', {top, left});
      this._menuBgComponent.style.top = top + 'px';
      this._menuBgComponent.style.left = left + 'px';
      this._header.append(this._menuBgComponent);

      if( this._isWindowWithTabletWidth() ) {
        this._signButtons.prepend(this._subscribeComponent);
      }
    } else {
      this._header.classList.add('is-menu-close');
      //events.emit('close-popup');
      setTimeout(() => {
        this._header.querySelector('.menu-bg').remove()
        this._header.classList.remove('is-menu-close');

        if( this._isWindowWithTabletWidth() ) {
          this._signButtons.querySelector('.subscribe').remove();
        }
      }, 600)
    }
  }
  _isWindowWithTabletWidth() {
    return document.documentElement.clientWidth >= 768;
  }
}

/** export */
export default Header;