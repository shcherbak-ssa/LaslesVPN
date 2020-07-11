'use strict';

/** imports */
import $ from './search';

/** constants */
const components = $('#components');

/** clone-component */
function cloneComponent(name) {
  const selector = `.${name}`;
  const component = components.$(selector);
  return component.clone();
}

/** export */
export default cloneComponent;