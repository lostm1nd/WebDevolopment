angular.module('custManagement').component('cmOrders', {
  templateUrl: 'components/cm-orders/cm-orders.html',
  controller: function ($scope, customersDB) {
    $scope.customers = customersDB;

    $scope.calculateCustomerTotal = function (customer) {
      return customer.orders.reduce(function (acc, order) {
        return acc + order.qty * order.price;
      }, 0);
    };
  }
});
