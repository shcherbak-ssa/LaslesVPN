'use strict';

/** imports */
import events from './events';

/** subscribe class */
class Subscribe {
  _modalName = 'subscribe';

  /** public methods */
  initEvents() {
    events
      .on('open-subscribe-modal', this._openSubscribeModalHandler.bind(this))
      .on('subscribe', this._subscribeHandler.bind(this));
  }

  /** private methods */
  _openSubscribeModalHandler() {
    events.emit('open-popup', {
      name: this._modalName,
      openCallback: this._subscribeOpenCallback
    });
  }
  _subscribeHandler() {
    events.emit('close-popup');
  }
  _subscribeOpenCallback(popup) {
    const input = popup.$('.base-input');
    events.emit('set-input-events', input);

    const button = popup.$('.base-button-large');
    events.emit('set-button-event', button);
  }
}

/** export */
export default Subscribe;