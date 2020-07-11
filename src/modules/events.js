'use strict';

/** events */
class Events {
  _handlers = new Map();

  /** public methods */
  on(event, handler) {
    if( this._isEventExist(event) ) {
      const eventHandlers = this._getHandlers(event);
      const updatedHandlers = [...eventHandlers, handler];
      this._setHandlers(event, updatedHandlers);
    } else {
      const eventHandlers = [handler];
      this._setHandlers(event, eventHandlers);
    }
    return this;
  }
  off(event, handler) {
    this._checkIfEventExist(event);

    const updatedHandlers = [];
    const eventHandlers = this._getHandlers(event);
    eventHandlers.forEach((item) => {
      if( item !== handler ) updatedHandlers.push(item);
    });

    if( updatedHandlers.length === 0 ) this._deleteEvent(event);
    else this._setHandlers(event, updatedHandlers);

    return this;
  }
  emit(event, ...rest) {
    this._checkIfEventExist(event);
    
    const eventHandlers = this._getHandlers(event);
    eventHandlers.map((handler) => handler(...rest));

    return this;
  }

  /** private methods */
  _isEventExist(event) {
    return this._handlers.has(event);
  }
  _checkIfEventExist(event) {
    if( !this._isEventExist(event) ) {
      throw new Error(`Unknow event: ${event}`);
    }
  }
  _getHandlers(event) {
    return this._handlers.get(event);
  }
  _setHandlers(event, handlers) {
    this._handlers.set(event, handlers);
  }
  _deleteEvent(event) {
    this._handlers.delete(event);
  }
}

/** exports */
const events = new Events();
export default events;