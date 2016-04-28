angular.module('custManagement').component('cmOrderAdd', {
  templateUrl: 'components/cm-order-add/cm-order-add.html',
  bindings: {
    order: '&'
  },
  controller: function ($scope, databaseService) {
    $scope.selectedCategory = '';
    $scope.selectedProduct = '';
    $scope.categories = [];
    $scope.productsInCategory = [];

    $scope.products = databaseService.query({collection: 'products'}, function success(products) {
      $scope.categories = Object.keys(products.reduce(function (acc, product) {
        acc[product.category] = 0;
        return acc;
      }, {}));
    });

    this.add = function (productName) {
      var order = $scope.products.filter(function (product) {
        return product.name === productName;
      }).reduce(function (acc, product) {
        return {
          name: product.name,
          price: product.price,
          qty: 1
        };
      }, {});

      this.order({order: order});
    };

    this.onCategoryChange = function (category) {
      $scope.selectedCategory = category;
      $scope.selectedProduct = '';

      $scope.productsInCategory = $scope.products.filter(function (product) {
        return product.category === category;
      });
    };
  }
});
