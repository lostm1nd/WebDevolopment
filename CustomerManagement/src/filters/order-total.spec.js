describe('Order total filter', function() {
  var orderTotal;

  beforeEach(module('custManagement'));

  beforeEach(inject(function(orderTotalFilter) {
    orderTotal = orderTotalFilter;
  }));

  it('should be a function that accepts 1 argument', function () {
    expect(orderTotal).toEqual(jasmine.any(Function));
    expect(orderTotal.length).toEqual(1);
  });

  it('should return the argument if it is not an array', function () {
    var expected = null;
    var actual = orderTotal(expected);

    expect(expected).toEqual(actual);
  });

  it('should sum array of orders with qty and price properties', function () {
    var orders = [
      { qty: 2, price: 20 },
      { qty: 1, price: 40.6 },
      { qty: 3, price: 1.5 }
    ];

    var expected = (2*20) + (1*40.6) + (3*1.5);
    var actual = orderTotal(orders);

    expect(expected).toEqual(actual);
  });
});
