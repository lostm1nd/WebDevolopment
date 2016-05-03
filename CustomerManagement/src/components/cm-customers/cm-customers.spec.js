describe('Customers component', function() {
  var component, scope, $httpBackend;

  beforeEach(module('custManagement'));

  beforeEach(inject(function($rootScope, $componentController, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend =  _$httpBackend_;
    component = $componentController('cmCustomers', {
      $scope: scope
    });

    // the component queries the db when created
    $httpBackend.when('GET', /customers/).respond([]);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should query the customers collection and save the response on the scope', function() {
    var response = [ { name: 'Customer One' } ];

    $httpBackend.expect('GET', /customers/).respond(response);
    $httpBackend.flush();

    expect(scope.customers[0].name).toEqual(response[0].name);
  });

  it('should define an add function on the component', function() {
    expect(component.add).toEqual(jasmine.any(Function));
  });

  it('should save customer to the database on add()', function() {
    var customer = { name: 'Customer One' };

    component.add(customer);

    $httpBackend.expect('POST', /customers/, customer).respond(customer);
    $httpBackend.flush();

    expect(scope.customers[0].name).toEqual(customer.name);
  });

  it('should define a delete function on the component', function() {
    expect(component.delete).toEqual(jasmine.any(Function));
  });

  it('should delete customer from database on delete()', function() {
    var spy = jasmine.createSpy();
    var customer = {
      name: 'Customer One',
      $remove: function (collection, cb) {
        spy(this);
        cb(this);
      }
    };

    component.delete(customer);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(customer);
  });
});
