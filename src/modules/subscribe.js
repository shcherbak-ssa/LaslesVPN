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
  _subscribeHandler() {
    events.emit('open-popup', {
      name: this._modalName,
      openCallback: this._subscribeOpenCallback,
      closeCallback: this._subscribeCloseCallback
    });
  }
  _subscribeOpenCallback(popup) {
    const input = popup.$('.base-input');
    events.emit('set-input-events', input);
  }
  _subscribeCloseCallback() {}
}

/** export */
export default Subscribe;