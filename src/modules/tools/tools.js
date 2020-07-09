'use strict';

/** imports */
import $ from './search';
import query from './query';
import cloneComponent from './clone';

/** init */
$.query = query;
$.clone = cloneComponent;

/** exports */
export default $;