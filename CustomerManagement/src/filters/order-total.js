angular.module('custManagement').filter('orderTotal', function () {
  return function (orders) {
    if (!orders) {
      return;
    }

    return orders.reduce(function (acc, order) {
      return acc + order.qty * order.price;
    }, 0);
  };
});
