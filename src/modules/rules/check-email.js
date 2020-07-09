'use strict';

/** constants */
const emailRegExp = /^([-a-z0-9_.])+\@([-a-z0-9_.])+\.([a-z]{2,4})$/i;

/** check-email function */
function checkEmail(email) {
  if( !emailRegExp.test(email) ) throw new Error('Invalid email address!');
}

/** export */
export default checkEmail;