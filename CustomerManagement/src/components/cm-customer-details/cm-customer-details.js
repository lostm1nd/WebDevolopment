angular.module('custManagement').component('cmCustomerDetails', {
  templateUrl: 'components/cm-customer-details/cm-customer-details.html',
  controller: function ($scope, databaseService) {
    this.$routerOnActivate = function (next) {
      var id = next.params.id ;
      $scope.customer = databaseService.get({collection: 'customers', id: id});
      $scope.products = databaseService.query({collection: 'products'}, function (products) {
        $scope.products = [].concat(products); // otherwise $onChanges in child is not invoked?
      });
    };

    this.addOrder = function (order) {
      $scope.customer.orders.push(order);

      return databaseService.update({
        collection: 'customers',
        id: $scope.customer._id.$oid
      }, $scope.customer, function success(updated) {
        $scope.customer = updated;
      }, function error(err) {
        $scope.customer.orders.pop();
        console.error(err);
      });
    };
  }
});
