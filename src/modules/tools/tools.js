'use strict';

/** imports */
import $ from './search';
import Cut from './cut';
import query from './query';
import cloneComponent from './clone';

/** init */
$.cut = new Cut();
$.query = query;
$.clone = cloneComponent;

/** exports */
export default $;