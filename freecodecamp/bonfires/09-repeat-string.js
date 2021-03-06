/*
 * Repeat a string repeat a string - Difficulty: 1/5
 *
 * - Repeat a given string (first argument) n times (second argument). 
 * - Return an empty string if n is a negative number.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string
 */

function repeat( str, num ) {
  if ( typeof str !== 'string' ) {
    throw new TypeError( 'Input should be a string' );
  }

  if ( num <= 0 ) {
    return '';
  }

  var text = new Array( num + 1 );

  return text.join( str );
}

module.exports = repeat;
