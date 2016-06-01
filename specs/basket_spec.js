var basket = require( '../basket' );
var assert = require( 'chai' ).assert;

item1 = {
  name: "pasta",
  quantity: 2,
  price: 1.50,
  offer: false
};

item2 = {
  name: "crisps",
  quantity: 4,
  price: 0.50,
  offer: false
};

item3 = {
  name: "apple",
  quantity: 4,
  price: 0.25,
  offer: false
};

item4 = {
  name: "Deep Heat",
  quantity: 3,
  price: 7.99,
  offer: false
};

item5 = {
  name: "carrots",
  quantity: 3,
  price: 0.69,
  offer: false
};

describe( 'Basket Basic Functions', function() {
  it( 'Tests existance of items', function() {
    assert.equal( 0, basket.items.length );
  });

  it( 'Add an item to the basket', function() {
    basket.add(item1);
    basket.add(item2);
    basket.add(item3);
    basket.add(item4);
    basket.add(item5);
    assert.equal( 5, basket.items.length );
  });

  it( 'Remove an item from the basket', function() {
    basket.remove();
    assert.equal( 4, basket.items.length );
  });

  it( 'Checks the total price of an individual item', function() {
    assert.equal( 2, basket.totalItemPrice(basket.items[3]));
  });

  it( 'Check total price of the basket (QTY: 4)', function() {
    assert.equal( 29.04, basket.totalPrice() );
    assert.equal( 4, basket.items.length );
  });

});
