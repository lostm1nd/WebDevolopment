angular.module('custManagement').component('cmOrders', {
  templateUrl: 'components/cm-orders/cm-orders.html',
  controller: function ($scope, customersDB) {
    $scope.customers = customersDB;
  }
});
