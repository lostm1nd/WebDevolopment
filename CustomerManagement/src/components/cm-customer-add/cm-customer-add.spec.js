describe('Add customer component', function() {
  var component, scope, saveSpy;

  beforeEach(module('custManagement'));
  beforeEach(inject(function($rootScope, $componentController) {
    scope = $rootScope.$new();
    saveSpy = jasmine.createSpy(function (arg) { return arg; });

    component = $componentController('cmCustomerAdd', {
      $scope: scope
    }, {
      save: saveSpy
    });
  }));

  it('should define an add function on the component', function() {
    expect(component.add).toEqual(jasmine.any(Function));
  });

  it('should invoke the passed save callback on add()', function() {
    var customer = {name: 'Jade', orders: []};

    expect(scope.customer).toEqual({});

    component.add(customer);

    expect(saveSpy).toHaveBeenCalledTimes(1);
    expect(saveSpy).toHaveBeenCalledWith({customer: customer});
    expect(scope.customer).toEqual({});
  });
});
