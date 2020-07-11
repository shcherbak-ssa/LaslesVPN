'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** constants */
const HIDE_MENU_WIDTH = 1024;

/** nav-module */
class NavModule {
  /** private properties */
  _nav = $('#nav');
  _navItems = this._nav.$('.nav--item', true);

  /** static methods */
  static init() {
    const navModule = new NavModule();
    navModule._navItems.forEach((navItem) => {
      navItem.on('click', navModule._navItemClickHandler.bind(navModule))
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
export default NavModule;