'use strict';

/** imports */
import $ from './search';

/** constants */
const reusableComponents = $('#reusable-components');

/** export */
function getReusableComponent(name) {
  const component = $.one(reusableComponents, `.${name}`);
  return component.cloneNode(true);
}

export default getReusableComponent;