angular.module('custManagement').component('cmCustomers', {
  templateUrl: 'components/cm-customers/cm-customers.html',
  controller: function ($scope, customersDB) {
    $scope.customers = customersDB;
  }
});
