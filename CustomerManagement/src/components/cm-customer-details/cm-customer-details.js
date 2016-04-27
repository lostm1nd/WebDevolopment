angular.module('custManagement').component('cmCustomerDetails', {
  templateUrl: 'components/cm-customer-details/cm-customer-details.html',
  controller: function ($scope, databaseService) {
    this.$routerOnActivate = function (next) {
      var id = next.params.id ;

      $scope.customer = databaseService.get({id: id});
    };
  }
});
