'use strict';

/** imports */
import $ from './search';
import Cut from './cut';
import Query from './query';
import cloneComponent from './clone';

/** init */
$.cut = new Cut();
$.query = new Query();
$.clone = cloneComponent;

/** exports */
export default $;