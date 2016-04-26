angular.module('custManagement').component('cmCustomerDetails', {
  templateUrl: 'components/cm-customer-details/cm-customer-details.html',
  controller: function ($scope, customersDB) {
    this.$routerOnActivate = function (next) {
      var id = next.params.id | 0;

      $scope.customer = customersDB.filter(function (cust) {
        return cust.id === id;
      }).pop();
    };
  }
});
