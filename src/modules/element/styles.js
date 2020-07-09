'use strict';

/** styles object */
const styles = {
  styles(styles) {
    for( const [property, value] of Object.entries(styles) ) {
      this._el.style[property] = value;
    }
  }
};

/** export */
export default styles;