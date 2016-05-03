describe('Orders component', function() {
  var component, scope, $httpBackend;

  beforeEach(module('custManagement'));
  beforeEach(inject(function($rootScope, $componentController, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend =  _$httpBackend_;
    component = $componentController('cmOrders', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should query the customers collection and save the response on the scope', function() {
    var response = [ { name: 'Customer One' } ];

    $httpBackend.expect('GET', /collections\/customers/).respond(response);
    $httpBackend.flush();

    expect(scope.customers.length).toEqual(1);
    expect(scope.customers[0].name).toEqual('Customer One');
  });
});
