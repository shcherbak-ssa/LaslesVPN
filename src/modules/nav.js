'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** constants */
const HIDE_MENU_WIDTH = 1024;

/** nav class */
class Nav {
  constructor() {
    this._nav = $('#nav');
    this._navItems = this._nav.$('.nav--item', true);
  }

  /** public methods */
  init() {
    this._navItems.forEach((navItem) => {
      navItem.on('click', this._navItemClickHandler.bind(this))
    })
  }

  /** private methods */
  _navItemClickHandler(event) {
    event.preventDefault();

    if( document.documentElement.clientWidth <= HIDE_MENU_WIDTH ) {
      events.emit('close-menu');
    }

    const navItem = $.createElement(event.target);
    const navItemAnchor = navItem.get(':href');
    
    if( navItemAnchor ) {
      const scrollElement = $(navItemAnchor);
      scrollElement.scroll({
        behavior: 'smooth'
      });
    }
  }
}

/** export */
export default Nav;