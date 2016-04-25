angular.module('custManagement').component('cmCustomerDetails', {
  templateUrl: 'components/cm-customer-details/cm-customer-details.html',
  controller: function ($scope, customersDB) {
    $scope.customers = customersDB;
  }
});
