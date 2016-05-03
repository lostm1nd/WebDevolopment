describe('Customer details component', function() {
  var component, scope, $httpBackend;

  beforeEach(module('custManagement'));
  beforeEach(inject(function($rootScope, $componentController, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend =  _$httpBackend_;
    component = $componentController('cmCustomerDetails', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should define an $routerOnActivate function on the component', function() {
    expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
  });

  it('should query customers/products on $routerOnActivate and save them on scope', function() {
    var customerId = '1q2w';
    var customer = {id: customerId, name: 'Customer one'};
    var products = [{name: 'Phone', price: 100, category: 'phone'}];

    $httpBackend.expect('GET', /collections\/customers/).respond(customer);
    $httpBackend.expect('GET', /collections\/products/).respond(products);

    component.$routerOnActivate({params: { id: customerId } });
    $httpBackend.flush();

    expect(scope.customer.id).toEqual(customer.id);
    expect(scope.products[0].name).toEqual(products[0].name);
  });

  it('should define an addOrder function on the component', function() {
    expect(component.addOrder).toEqual(jasmine.any(Function));
  });

  it('should add order to the customer and update the DB on addOrder', function() {
    var order = {name: 'Phone', price: 100, category: 'phone'};
    scope.customer = {_id: {$oid: '1q2w'}, name: 'John', orders: []};

    $httpBackend.expect('PUT', /collections\/customers\/1q2w/).respond({});
    component.addOrder(order);

    expect(scope.customer.orders).toEqual([order]);
  });
});
