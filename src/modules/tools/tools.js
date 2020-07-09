'use strict';

/** imports */
import $ from './search';
import Cut from './cut';
import Query from './query';
import cloneComponent from './clone';
import Body from './body';

/** init */
$.cut = new Cut();
$.query = new Query();
$.clone = cloneComponent;
$.body = new Body();

/** exports */
export default $;