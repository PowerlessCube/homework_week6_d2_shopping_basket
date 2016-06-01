var basket = require( '../basket' );
var assert = require( 'chai' ).assert;

describe( 'Basket Basic Functions', function() {
  it( 'Tests existance of items', function() {
    assert.equal( 4, basket.items.length );
  });

  it( 'Add an item to the basket', function() {
    basket.add(
      item5 = {
        name: "carrots",
        quantity: 3,
        price: 0.69,
        offer: false
      }
    );
    assert.equal( 5, basket.items.length );
  });

  it( 'Remove an item from the basket', function() {
    basket.remove();
    assert.equal( 4, basket.items.length );
  });

  it( 'Checks the total price of an individual item', function() {
    assert.equal( 3, basket.sumItemPrice(basket.items[1]));
  });

  it( 'Check total price of the basket (QTY: 4)', function() {
    assert.equal( 8.07, basket.totalPrice() );
    assert.equal( 4, basket.items.length );
  });

});
