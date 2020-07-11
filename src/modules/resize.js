'use strict';

/** imports */
import events from './events';

/** constants */
const TABLET_START_WIDTH = 1024;
const SLIDER_HIDE_WIDTH = 1799;

/** resize class */
class ResizeModule {
  _document = document.documentElement;

  /** static methods */
  static init() {
    const resizeModule = new ResizeModule();
    const resizeHandler = resizeModule._resizeHandler.bind(resizeModule);
    window.addEventListener('resize', resizeHandler);
    events.on('forse-resize', resizeHandler)
  }

  /** private methods */
  _resizeHandler() {
    const documentWidth = this._document.clientWidth;
    if( documentWidth <= TABLET_START_WIDTH ) {
      events.emit('import-header-module');
    }
    if( documentWidth <= SLIDER_HIDE_WIDTH ) {
      events.emit('import-slider-module');
    }
  }
}

/** export */
export default ResizeModule;