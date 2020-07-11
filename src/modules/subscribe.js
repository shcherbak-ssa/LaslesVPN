'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** subscribe-module */
class SubscribeModule {
  /** private properties */
  _popupName = 'subscribe';
  _subscribe = null;

  /** static methods */
  static init() {
    const subscribeModule = new SubscribeModule();
    events
      .on(
        'open-subscribe-modal',
        subscribeModule._openSubscribeModalHandler.bind(subscribeModule)
      )
      .on(
        'init-subscribe-events',
        subscribeModule._initSubscribeEventsHandler.bind(subscribeModule)
      )
  }

  /** private methods */
  _openSubscribeModalHandler() {
    events.emit('open-popup', {
      name: this._popupName,
      openCallback: this._subscribeOpenCallback
    });
  }
  _subscribeOpenCallback() {
    this._subscribe = $('.subscribe');

    const input = this._subscribe.$('.base-input');
    events.emit('set-input-events', input);

    const button = this._subscribe.$('.base-button-large');
    events.emit('set-button-event', button);
  }
  _initSubscribeEventsHandler() {
    this._subscribeOpenCallback();
  }
}

/** export */
export default SubscribeModule;