'use strict';

/** imports */
import $ from './tools';
import events from './events';

/** subscribe class */
class Subscribe {
  _modalName = 'subscribe';
  _subscribe = null;

  /** public methods */
  initEvents() {
    events
      .on('open-subscribe-modal', this._openSubscribeModalHandler.bind(this))
      .on('init-subscribe-events', this._initSubscribeEventsHandler.bind(this))
      .on('subscribe', this._subscribeHandler.bind(this));
  }

  /** private methods */
  _openSubscribeModalHandler() {
    events.emit('open-popup', {
      name: this._modalName,
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
  _subscribeHandler() {
    const input = this._subscribe.$('.base-input');

    if( input.has('.is-error') ) return;
    events.emit('close-popup');
  }
  
}

/** export */
export default Subscribe;