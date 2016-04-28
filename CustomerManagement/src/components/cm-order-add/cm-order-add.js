angular.module('custManagement').component('cmOrderAdd', {
  templateUrl: 'components/cm-order-add/cm-order-add.html',
  bindings: {
    order: '&',
    products: '<'
  },
  controller: function ($scope) {
    $scope.selectedCategory = '';
    $scope.selectedProduct = '';
    $scope.productsInCategory = [];

    this.$onChanges = function (changes) {
      $scope.categories = Object.keys(changes.products.currentValue.reduce(function (acc, product) {
        acc[product.category] = 0;
        return acc;
      }, {}));
    };

    this.add = function (productName) {
      var order = this.products.filter(function (product) {
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

      $scope.productsInCategory = this.products.filter(function (product) {
        return product.category === category;
      });
    };
  }
});
