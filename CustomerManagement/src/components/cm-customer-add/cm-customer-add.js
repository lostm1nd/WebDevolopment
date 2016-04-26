angular.module('custManagement').component('cmCustomerAdd', {
  templateUrl: 'components/cm-customer-add/cm-customer-add.html',
  controller: function ($scope, customersDB) {
    $scope.customer = {};

    $scope.add = function (customer) {
      var nextId = customersDB[customersDB.length - 1].id + 1;

      customer.id = nextId;
      customer.orders = [];

      customersDB.push(customer);

      $scope.customer = {};
    };
  }
});
