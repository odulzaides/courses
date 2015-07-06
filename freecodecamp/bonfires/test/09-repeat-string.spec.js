var expect = require( 'chai' ).expect;
var repeat = require( '../09-repeat-string' );

describe( '#repeat()', function() {

  it( 'Should return the string repeated 3 times', function() {
    expect( repeat( '*', 3 )).to.equal( '***' );
  });

  it( 'Should return the string repeated 3 times', function() {
    expect( repeat( 'abc', 3 )).to.equal( 'abcabcabc' );
  });

  it( 'Should return the string repeated 3 times', function() {
    expect( repeat( 'abc', -2 )).to.equal( '' );
  });

});
