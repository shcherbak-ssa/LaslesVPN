'use strict';

/** imports */
import $ from './search';
import Cut from './cut';
import Query from './query';
import cloneComponent from './clone';
import Body from './body';
import Element from './element';

/** init */
$.cut = new Cut();
$.query = new Query();
$.clone = cloneComponent;
$.body = new Body();
$.createElement = Element.create;

/** exports */
export default $;