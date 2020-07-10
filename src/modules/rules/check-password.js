'use strict';

/** constants */
const LIMIT_PASSWORD_LENGTH = 8;

/** check-password rule */
function checkPassword(password) {
  if( password.length < LIMIT_PASSWORD_LENGTH )
    throw new Error('Password cannot be less than 8 characters');
}

/** export */
export default checkPassword;