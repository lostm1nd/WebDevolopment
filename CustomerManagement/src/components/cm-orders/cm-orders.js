angular.module('custManagement').component('cmOrders', {
  templateUrl: 'components/cm-orders/cm-orders.html',
  controller: function ($scope, databaseService) {
    $scope.customers = databaseService.query({collection: 'customers'});
  }
});
