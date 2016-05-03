describe('Add order component', function() {
  var component, scope, orderSpy, productMock;

  beforeEach(module('custManagement'));
  beforeEach(inject(function($rootScope, $componentController) {
    scope = $rootScope.$new();
    orderSpy = jasmine.createSpy();
    productMock = {name: 'Phone', price: 100, category: 'phone'};

    component = $componentController('cmOrderAdd', {
      $scope: scope
    }, {
      order: orderSpy,
      products: [productMock]
    });
  }));

  it('should define an $onChanges function on the component', function() {
    expect(component.$onChanges).toEqual(jasmine.any(Function));
  });

  it('should create a map of categories in $onChanges and set it on the scope', function() {
    var products = {
      products: {
        currentValue: [
          {category: 'Mobile'},
          {category: 'Tablet'},
          {category: 'Mobile'},
          {category: 'Tablet'},
        ]
      }
    };

    component.$onChanges(products);

    expect(scope.categories).toEqual(['Mobile', 'Tablet']);
  });

  it('should define an add function on the component', function() {
    expect(component.add).toEqual(jasmine.any(Function));
  });

  it('should invoke the passed order callback on add', function() {
    var expected = {
      order: { name: productMock.name, price: productMock.price, qty: 1}
    };

    component.add('Phone');

    expect(orderSpy).toHaveBeenCalledTimes(1);
    expect(orderSpy).toHaveBeenCalledWith(expected);
  });

  it('should define an onCategoryChange function on the component', function() {
    expect(component.onCategoryChange).toEqual(jasmine.any(Function));
  });

  it('should set the correct selectedCategory on onCategoryChange', function() {
    component.onCategoryChange('phone');

    expect(scope.selectedCategory).toEqual('phone');
  });

  it('should clear selectedProduct on onCategoryChange', function() {
    scope.selectedProduct = 'test';

    component.onCategoryChange('phone');

    expect(scope.selectedProduct).toEqual('');
  });

  it('should set productsInCategory on onCategoryChange', function() {
    component.onCategoryChange('phone');

    expect(scope.productsInCategory).toEqual([productMock]);
  });
});
