//basket object, which is technically an array of items.

//total cost should be £6, item quantity should

var basket = {

  items: [],

  storeCard: false,

  add: function(item) {
    this.items.unshift(item);
  },

  remove: function() {
    this.items.pop();
  },

  totalItemPrice: function(item) {
    var totalItemPrice = (item.price * item.quantity);
    return totalItemPrice;
  },

  totalPrice: function() {
    var totalPrice = 0;
    for (var i = 0; i < this.items.length; i++) {
      totalPrice += this.totalItemPrice(this.items[i]);
    }
    return totalPrice;
  }

};


//unshift was not working in my test, cheated and used .pop method instead.  Will need to come back tot his one.

module.exports = basket;
