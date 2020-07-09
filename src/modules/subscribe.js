'use strict';

/** imports */
import events from './events';

/** subscribe class */
class Subscribe {
  _modalName = 'subscribe';

  /** public methods */
  initEvents() {
    events.on('subscribe', this._subscribeHandler.bind(this))
  }

  /** private methods */
  _subscribeHandler(position) {
    events.emit('open-popup', {
      position,
      modal: {
        name: this._modalName
      }
    });
  }
}

/** export */
export default Subscribe;