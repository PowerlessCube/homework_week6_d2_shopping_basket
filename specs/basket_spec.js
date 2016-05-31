var assert = require( 'chai' ).assert;

describe( 'basket', function() {
  it( 'adds item to basket', function() {
    assert.equal( 0, basket.items.length );
  });
});
