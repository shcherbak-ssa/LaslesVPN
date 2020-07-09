'use strict';

/** imports */
import $ from './search';

/** constants */
const reusableComponents = $('#reusable-components');

/** export */
function getReusableComponent(name) {
  const selector = `.${name}`;
  const component = reusableComponents.$(selector);
  return component.clone();
}

export default getReusableComponent;