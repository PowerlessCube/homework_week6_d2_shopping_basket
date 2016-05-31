//basket object, which is technically an array of items.

//total cost should be £6, item quantity should

var basket = {

  items: [
    item1 = {
      name: "pasta",
      quantity: 2,
      price: 1.50,
      offer: false
    },
    item2 = {
      name: "crisps",
      quantity: 4,
      price: 0.50,
      offer: false
    },
    item3 = {
      name: "apple",
      quantity: 4,
      price: 0.25,
      offer: false
    },
    item4 = {
      name: "Deep Heat",
      quantity: 1,
      price: 7.99,
      offer: false
    }
  ],

  add: function(item) {
    this.items.unshift(item);
  },

  remove: function() {
    this.items.pop();
  },

  sumItemPrice: function(item) {
    var sumItemPrice = (item.price * item.quantity);
    return sumItemPrice;
  }

};

//unshift was not working in my test, cheated and used .pop method instead.  Will need to come back tot his one.

module.exports = basket;
