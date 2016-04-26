angular.module('custManagement').component('cmCustomers', {
  templateUrl: 'components/cm-customers/cm-customers.html',
  controller: function ($scope, customersDB) {
    $scope.customers = customersDB;

    $scope.delete = function (customer) {
      var id = customer.id;

      customersDB = customersDB.filter(function (cust) {
        return cust.id !== id;
      });
      $scope.customers = customersDB;
    };
  }
});
