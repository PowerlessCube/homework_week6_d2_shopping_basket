var basket = require( '../basket' );
var assert = require( 'chai' ).assert;

describe( 'basket', function() {
  it( 'Tests existance of items', function() {
    assert.equal( 4, basket.items.length );
  });

  it( 'Add an item to the basket', function() {
    assert.equal( 5, basket.items.length );
  });

});
