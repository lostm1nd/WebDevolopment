angular.module('custManagement').component('cmCustomers', {
  templateUrl: 'components/cm-customers/cm-customers.html',
  controller: function ($scope, databaseService) {
    $scope.customers = databaseService.query();

    this.add = function (customer) {
      return databaseService.save(customer, function success(saved) {
        $scope.customers.push(saved);
      });
    };

    this.delete = function (customer) {
      customer.$remove(null, function success(deleted) {
        $scope.customers = $scope.customers.filter(function (cust) {
          return cust._id.$oid !== deleted._id.$oid;
        });
      });
    };
  }
});
