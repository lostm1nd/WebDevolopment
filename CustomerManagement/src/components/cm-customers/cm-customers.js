angular.module('custManagement').component('cmCustomers', {
  templateUrl: 'components/cm-customers/cm-customers.html',
  controller: function ($scope, databaseService) {
    $scope.customers = databaseService.query();

    $scope.addCustomer = function (customer) {
      $scope.customers.push(customer);
    };

    $scope.delete = function (customer) {
      customer.$remove();
      $scope.customers = $scope.customers.filter(function (cust) {
        return cust._id.$oid !== customer._id.$oid;
      });
    };
  }
});
