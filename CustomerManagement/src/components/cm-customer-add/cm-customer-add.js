angular.module('custManagement').component('cmCustomerAdd', {
  templateUrl: 'components/cm-customer-add/cm-customer-add.html',
  bindings: {
    save: '&'
  },
  controller: function ($scope, $q) {
    $scope.customer = {};

    this.add = function (customer) {
      customer.orders = [];

      $q.when(
        this.save({customer: customer})
      ).then(function success(saved) {
        $scope.customer = {};
      }, function error(err) {
        console.error(err);
      });
    };
  }
});
