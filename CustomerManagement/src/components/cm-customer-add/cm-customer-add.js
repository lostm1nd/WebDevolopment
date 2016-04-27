angular.module('custManagement').component('cmCustomerAdd', {
  templateUrl: 'components/cm-customer-add/cm-customer-add.html',
  bindings: {
    addCustomer: '&'
  },
  controller: function ($scope, databaseService) {
    var ctrl = this;
    $scope.customer = {};

    $scope.add = function (customer) {
      customer.orders = [];

      databaseService.save(customer, function (saved) {
        ctrl.addCustomer({customer: saved});
      });

      $scope.customer = {};
    };
  }
});
